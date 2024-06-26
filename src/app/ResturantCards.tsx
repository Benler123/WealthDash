import React, { Component, act, useState } from "react"
import ResturantCard from "./components/ResturantCard"
import Discard from './components/Discard'
import CachedIcon from "@mui/icons-material/Cached"
import { IntegerType } from "mongodb"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import Button from "@mui/material/Button"
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight"
import { useData } from "./DataContext"
import Deck from "./components/Deck"

function RestaurantCards() {
  // call getActiveRestaurants()
  const activeRestaurants = useData() || [];

  const [expand, setExpand] = useState(true)
  const [expandDiscard, setExpandDiscard] = useState(false)
  
  let dic: { [key: string]: boolean } = {}
  activeRestaurants.forEach((activeRestaurant) => {
    dic[activeRestaurant["name"]] = false
  })

  const [selected, setSelected] = useState(dic)

  const toggleSelection = (restaurantName: string, index: number) => {
    const newSelected = { ...selected }
    newSelected[restaurantName] = !newSelected[restaurantName]
    const newTranslations = { ...translations}
    if (newSelected[restaurantName]) {
      newTranslations[index] = translationsToDiscard[index]
    } else {
      newTranslations[index] = translationsToDeck[index]
    }
    setTranslations(newTranslations)
    setSelected(newSelected)
  }

  const sendSelection = (selected: { [key: string]: boolean }) => {
    const restaurantNames = Object.keys(selected).filter((key) => selected[key])
       const payload = {
     restaurantNames: restaurantNames
   }


   try {
    fetch("/api/vote", {
       method: "POST",
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify(payload)
     })
   } catch (error) {
     throw new Error("Error submitting votes" + error)
   }
  }

  const selectedColor = "rgb(255, 215, 0)"
  const wfColor = "rgb(70,62,188)"
  const numSelected = Object.values(selected).filter((value) => value).length

  const [open, setOpen] = React.useState(false)

  const [open2, setOpen2] = React.useState(false)

  const handleClickOpen = () => {
    if (numSelected != 0) {
        setExpandDiscard(true);
        setExpand(true)
        setOpen2(true);
        handleClose(true)
    }
  };

  const translationsToDeck = [
    "translate-x-[500%]",
    "translate-x-[400%]",
    "translate-x-[300%]",
    "translate-x-[200%]",
    "translate-x-[100%]",
    "translate-x-[500%] translate-y-[-100%]",
    "translate-x-[400%] translate-y-[-100%]",
    "translate-x-[300%] translate-y-[-100%]",
    "translate-x-[200%] translate-y-[-100%]",
    "translate-x-[100%] translate-y-[-100%]",
  ]

  const translationsToDiscard = [
    "translate-x-[500%] translate-y-[100%]",
    "translate-x-[400%] translate-y-[100%]",
    "translate-x-[300%] translate-y-[100%]",
    "translate-x-[200%] translate-y-[100%]",
    "translate-x-[100%] translate-y-[100%]",
    "translate-x-[500%]",
    "translate-x-[400%]",
    "translate-x-[300%]",
    "translate-x-[200%]",
    "translate-x-[100%]",
  ]

  const [translations, setTranslations] = React.useState(translationsToDeck);

  const handleClose = (send: boolean) => {
    if (send) {
      let newTranslations = translations
      sendSelection(selected)
    }
    setOpen2(true)
  }

  return (
    <div className="flex w-full justify-between flex-col">
      <div className="flex w-full">
        <div className="flex w-5/6">
        {activeRestaurants.slice(0, 5).map((activeRestaurant, index) => (
          <div
            onClick={() => toggleSelection(activeRestaurant["name"], index)}
            // className={`transition duration-1000 ease-in-out w-auto ${expand && translations[index]}`}
            className={`flex transition duration-1000 ease-in-out w-full ${expand && (!selected[activeRestaurant["name"]] || expandDiscard) && translations[index]}`}
          >
            <ResturantCard
              name={activeRestaurant["name"]}
              imagePath={activeRestaurant["photoUrl"]}
              rating={activeRestaurant["starRating"]}
              cuisine={activeRestaurant["categories"]}
              borderColor={
                selected[activeRestaurant["name"]]
                  ? selectedColor
                  : wfColor
              }
            yelpUrl={activeRestaurant["yelpUrl"]}
            />
          </div>
        ))}
        </div>
        <button onClick={() => setExpand(!expand)} className="z-10 flex w-1/6">
            <Deck/>
        </button>


      </div>
      <div className="flex w-full">
        <div className="flex w-5/6">
        {activeRestaurants.slice(5, 10).map((activeRestaurant, index) => (
          <div
            onClick={() => toggleSelection(activeRestaurant["name"], index + 5)}
            className={`flex transition duration-1000 ease-in-out w-full ${expand && (!selected[activeRestaurant["name"]] || expandDiscard) && translations[index + 5]}`}
          >
            <ResturantCard
              name={activeRestaurant["name"]}
              imagePath={activeRestaurant["photoUrl"]}
              rating={activeRestaurant["starRating"]}
              cuisine={activeRestaurant["categories"]}
              borderColor={
                selected[activeRestaurant["name"]]
                  ? selectedColor
                  : wfColor
              }
              yelpUrl={activeRestaurant["yelpUrl"]}
            />
          </div>
        ))}
        </div>
        <button className="flex w-1/6" onClick={handleClickOpen}>
          <Discard />
        </button>
      </div>

      <Dialog
        open={open}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Confirm"}</DialogTitle>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>No</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open2}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Sent preference card to Miriam!"}</DialogTitle>
        <img src="/snoppy.gif"/>
      </Dialog>
    </div>
  )
}
export default RestaurantCards
