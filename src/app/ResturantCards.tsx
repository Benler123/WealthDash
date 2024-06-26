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
  let dic: { [key: string]: boolean } = {}
  activeRestaurants.forEach((activeRestaurant) => {
    dic[activeRestaurant["restaurantId"]] = false
  })

  const [selected, setSelected] = useState(dic)

  const toggleSelection = (restaurantId: string) => {
    const newSelected = { ...selected }
    newSelected[restaurantId] = !newSelected[restaurantId]
    console.log(restaurantId)
    setSelected(newSelected)
  }

  const sendSelection = (selected: { [key: string]: boolean }) => {
    const restaurantIds = Object.keys(selected).filter((key) => selected[key])
    // /api/vote {"restaurantIds": restaurant}
    console.log(restaurantIds)
  }

  const selectedColor = "rgb(210, 169, 29)"
  const wfColor = "rgb(70,62,188)"
  const numSelected = Object.values(selected).filter((value) => value).length

  const [open, setOpen] = React.useState(false)

  const [open2, setOpen2] = React.useState(false)

  const handleClickOpen = () => {
    if (numSelected != 0) {
        setExpand(!expand);
        setOpen(true);
    }
  };

  const translationsToDeck = [
    "translate-x-[87.5em]",
    "translate-x-[70em]",
    "translate-x-[52.5em]",
    "translate-x-[35em]",
    "translate-x-[17.5em]",
    "translate-x-[87.5em] translate-y-[-24.5em]",
    "translate-x-[70em] translate-y-[-24.5em]",
    "translate-x-[52.5em] translate-y-[-24.5em]",
    "translate-x-[35em] translate-y-[-24.5em]",
    "translate-x-[17.5em] translate-y-[-24.5em]",
  ]

  const [translations, setTranslations] = React.useState(translationsToDeck);

  const handleClose = (send: boolean) => {
    if (send) {
      sendSelection(selected)
    }
    setOpen2(true)
  }

  return (
    <div className="flex w-full justify-between flex-col">
      <div className="flex w-full ">
        {activeRestaurants.slice(0, 5).map((activeRestaurant, index) => (
          <div
            onClick={() => toggleSelection(activeRestaurant["restaurantId"])}
            className={`transition duration-1000 ease-in-out w-auto ${expand && !selected[activeRestaurant["restaurantId"]] && translations[index]}`}
          >
            <ResturantCard
              key={activeRestaurant["name"]}
              name={activeRestaurant["name"]}
              imagePath={activeRestaurant["photoSrc"]}
              rating={activeRestaurant["starRating"]}
              cuisine={activeRestaurant["categories"]}
              borderColor={
                selected[activeRestaurant["restaurantId"]]
                  ? selectedColor
                  : wfColor
              }
            />
          </div>
        ))}
        <button onClick={() => setExpand(!expand)} className="z-10">
            <Deck/>
        </button>
        {/* <div className="mt-[15em] ml-[2gem]">
          {!expand ? (
            <div>
              <button onClick={handleClickOpen}>
                <ArrowCircleRightIcon
                  style={{ width: "60px", height: "60px" }}
                />
              </button>
            </div>
          ) : (
            <div>
              <button onClick={() => setExpand(!expand)}>
                <img
                  style={{ width: "60px", height: "60px" }}
                  src="drawCard.svg"
                />
              </button>
            </div>
          )}
        </div> */}
      </div>
      <div className="flex w-full">
        {activeRestaurants.slice(5, 10).map((activeRestaurant, index) => (
          <div
            onClick={() => toggleSelection(activeRestaurant["restaurantId"])}
            className={`transition duration-1000 ease-in-out w-auto ${expand && !selected[activeRestaurant["restaurantId"]] && translations[index + 5]}`}
          >
            <ResturantCard
              key={activeRestaurant["name"]}
              name={activeRestaurant["name"]}
              imagePath={activeRestaurant["photoSrc"]}
              rating={activeRestaurant["starRating"]}
              cuisine={activeRestaurant["categories"]}
              borderColor={
                selected[activeRestaurant["restaurantId"]]
                  ? selectedColor
                  : wfColor
              }
            />
          </div>
        ))}
        <button onClick={handleClickOpen} className="z-10">
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
          <Button onClick={handleClose}>Yes</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open2}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"SUBMITTED"}</DialogTitle>
      </Dialog>
    </div>
  )
}
export default RestaurantCards
