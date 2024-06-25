import React, { Component, act, useState } from 'react';
import ResturantCard from './components/ResturantCard';
import Deck from './components/Deck';
import CachedIcon from '@mui/icons-material/Cached';
import { IntegerType } from 'mongodb';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function RestaurantCards(){    
    // call getActiveRestaurants()
    const activeRestaurants = [
        {
            "restaurantId": "1",
            "name": "popeyes",
            "categories": ["Jamaican", "Fast Food"],
            "starRating": 3.5,
            "photoSrc": "https://tb-static.uber.com/prod/image-proc/processed_images/7f5f084a435fb7f3e8ef93d187e34642/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
            "pos": 0
        },
        {
            "restaurantId": "2",
            "name": "popeyes",
            "categories": ["Jamaican"],
            "starRating": 3.5,
            "photoSrc": "https://tb-static.uber.com/prod/image-proc/processed_images/7f5f084a435fb7f3e8ef93d187e34642/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
            "pos": 1
        },
        {
            "restaurantId": "3",
            "name": "popeyes",
            "categories": ["Jamaican"],
            "starRating": 3.5,
            "photoSrc": "https://tb-static.uber.com/prod/image-proc/processed_images/7f5f084a435fb7f3e8ef93d187e34642/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
            "pos": 2
        },
        {
            "restaurantId": "4",
            "name": "popeyes",
            "categories": ["Jamaican"],
            "starRating": 3.5,
            "photoSrc": "https://tb-static.uber.com/prod/image-proc/processed_images/7f5f084a435fb7f3e8ef93d187e34642/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
            "pos": 3
        },
        {
            "restaurantId": "5",
            "name": "popeyes",
            "categories": ["Jamaican"],
            "starRating": 3.5,
            "photoSrc": "https://tb-static.uber.com/prod/image-proc/processed_images/7f5f084a435fb7f3e8ef93d187e34642/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
            "pos": 4
        },
        {
            "restaurantId": "6",
            "name": "popeyes",
            "categories": ["Jamaican"],
            "starRating": 3.5,
            "photoSrc": "https://tb-static.uber.com/prod/image-proc/processed_images/7f5f084a435fb7f3e8ef93d187e34642/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
            "pos": 5
        },
        {
            "restaurantId": "7",
            "name": "popeyes",
            "categories": ["Jamaican"],
            "starRating": 3.5,
            "photoSrc": "https://tb-static.uber.com/prod/image-proc/processed_images/7f5f084a435fb7f3e8ef93d187e34642/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
            "pos": 6
        },
        {
            "restaurantId": "8",
            "name": "popeyes",
            "categories": ["Jamaican"],
            "starRating": 3.5,
            "photoSrc": "https://tb-static.uber.com/prod/image-proc/processed_images/7f5f084a435fb7f3e8ef93d187e34642/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
            "pos": 7
        },
        {
            "restaurantId": "9",
            "name": "popeyes",
            "categories": ["Jamaican"],
            "starRating": 3.5,
            "photoSrc": "https://tb-static.uber.com/prod/image-proc/processed_images/7f5f084a435fb7f3e8ef93d187e34642/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
            "pos": 8
        },
        {
            "restaurantId": "10",
            "name": "popeyes",
            "categories": ["Jamaican"],
            "starRating": 3.5,
            "photoSrc": "https://tb-static.uber.com/prod/image-proc/processed_images/7f5f084a435fb7f3e8ef93d187e34642/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
            "pos": 9
        },
        
        
    ]

  const [expand, setExpand] = useState(true);
  let dic: { [key: string]: boolean } = {};
  activeRestaurants.forEach(activeRestaurant => {
    dic[activeRestaurant["restaurantId"]] = false;
  })

  const [selected, setSelected] = useState(dic);

  const toggleSelection = (restaurantId: string) => {
    const newSelected = {...selected};
    newSelected[restaurantId] = !newSelected[restaurantId]
    console.log(restaurantId)
    setSelected(newSelected)
  };

  const sendSelection = (selected: { [key: string]: boolean}) => {
    const restaurantIds = Object.keys(selected).filter(key => selected[key]);
    // /api/vote {"restaurantIds": restaurant}
    console.log(restaurantIds)
  }

  const selectedColor = "rgb(210, 169, 29)";
  const wfColor = "rgb(70,62,188)"
  const numSelected = Object.values(selected).filter(value => value).length;

  const [open, setOpen] = React.useState(false);

  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setExpand(!expand);
    setOpen(true);
  };

  const translations = [
    "translate-x-[87.5em] translate-y-[25.5em]",
    "translate-x-[70em] translate-y-[25.5em]",
    "translate-x-[52.5em] translate-y-[25.5em]",
    "translate-x-[35em] translate-y-[25.5em]",
    "translate-x-[17.5em] translate-y-[25.5em]",
    "translate-x-[87.5em]",
    "translate-x-[70em]",
    "translate-x-[52.5em]",
    "translate-x-[35em]",
    "translate-x-[17.5em]",
  ]

  const handleClose = (send:boolean) => {
    if (send) {
        sendSelection(selected);
    }
    setOpen2(true);
  };

    return (
      <div className="flex w-full justify-between flex-col">
          <div className="flex w-full ">
              {
                  activeRestaurants.slice(0,5).map((activeRestaurant, index) => (
                      <div onClick={()=>toggleSelection(activeRestaurant["restaurantId"])} className={`transition duration-1000 ease-in-out w-auto ${(expand && !selected[activeRestaurant["restaurantId"]]) && translations[index]}`}>
                      <ResturantCard key={index} name={activeRestaurant["name"]} imagePath={activeRestaurant["photoSrc"]} rating={activeRestaurant["starRating"]} cuisine={activeRestaurant["categories"]} borderColor={selected[activeRestaurant["restaurantId"]]? selectedColor: wfColor}/>
                      </div>
                  ))
              }
              <div className="mt-[15em] ml-[2gem]">
                {!expand ? 
                <div>
                    <button onClick={handleClickOpen}>
                        <ArrowCircleRightIcon style={{ width: '60px', height: '60px' }} />
                    </button>
                    </div> :
                 <div>
                    <button onClick={() => setExpand(!expand)}>
                        <img style={{ width: '60px', height: '60px' }} src="drawCard.svg"/>
                    </button>
                    </div>}
                </div>
          </div>
          <div className="flex w-full">
            {
                  activeRestaurants.slice(5,10).map((activeRestaurant, index) => (
                      <div  onClick={()=>toggleSelection(activeRestaurant["restaurantId"])} className={`transition duration-1000 ease-in-out w-auto ${(expand && !selected[activeRestaurant["restaurantId"]]) && translations[index+5]}`}>
                        <ResturantCard key={index + 5} name={activeRestaurant["name"]} imagePath={activeRestaurant["photoSrc"]} rating={activeRestaurant["starRating"]} cuisine={activeRestaurant["categories"]} borderColor={selected[activeRestaurant["restaurantId"]]? selectedColor: wfColor}/>
                      </div>
                  ))
              }  
              <div  onClick={()=>toggleSelection("1")} className={'z-10'}>
                        <Deck/>
                      </div>
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
export default RestaurantCards;

