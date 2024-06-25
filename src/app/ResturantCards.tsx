import React, { Component, useState } from 'react';
import ResturantCard from './components/ResturantCard';
import CachedIcon from '@mui/icons-material/Cached';
import { IntegerType } from 'mongodb';

function RestaurantCards(){    
    const resturants = [
        "McDonalds",
        "Burger King",
        "KFC",
        "Wendys",
        "Taco Bell",
        "Pizza Hut",
        "Subway",
        "Starbucks",
        "Dunkin Donuts",
        "Chipotle",
    ]
    const images = [
        "download.jpeg",
        "download.jpeg",
        "download.jpeg",
        "download.jpeg",
        "download.jpeg",
        "download.jpeg",
        "download.jpeg",
        "download.jpeg",
        "download.jpeg",
        "download.jpeg",
    ]
    const ratings = [
        3.2,
        4.5,
        2.7,
        4.1,
        3.9,
        4.3,
        3.8,
        4.0,
        4.2,
        4.4
    ]
    const cuisines = [
        "Fast Food",
        "Fast Food",
        "Fast Food",
        "Fast Food",
        "Fast Food",
        "Fast Food",
        "Fast Food",
        "Fast Food",
        "Fast Food",
        "Fast Food",
    ]   


    const [expand, setExpand] = useState(false);
  const [selected, setSelected] = useState(new Array(resturants.length).fill(false));

  const toggleSelection = (index: number) => {
    if (selected.filter((s) => s).length === 5 && !selected[index]) {
      return;
    }
    const newSelected = [...selected];
    newSelected[index] = !newSelected[index];
    setSelected(newSelected);
    console.log(index)
  };

  const selectedColor = "rgb(196, 83, 0)";
  const wfColor = "rgb(70,62,188)"
  const numSelected = selected.filter((s) =>s).length;

    return (
<div className="flex w-full justify-between flex-col">
    <div className="flex w-full pb-4">
        {
            resturants.slice(0,5).map((resturant, index) => (
                 <div onClick={()=>toggleSelection(index)} className={`transition ease-in-out w-auto ${expand && `translate-x-[100em] translate-y-[18em]`}`}>
                <ResturantCard key={index} name={resturant} imagePath={images[index]} rating={ratings[index]} cuisine={cuisines[index]} borderColor={selected[index]? selectedColor: wfColor}/>
                </div>
            ))
        }
        {expand ? <div className="w-24 bg-indigo-500 text-3xl" onClick={() => setExpand(!expand)}>SUBMIT</div> : <div className="w-24 bg-indigo-500 text-5xl" onClick={() => setExpand(!expand)}>DRAW CARDS</div>}
    </div>
    <div className="flex w-full">{
            resturants.slice(5,10).map((resturant, index) => (
                <div  onClick={()=>toggleSelection(index + 5)} className={`transition ease-in-out w-auto ${expand && `translate-x-[100em]`}`}>
                <ResturantCard key={index} name={resturant} imagePath={images[index + 5]} rating={ratings[index + 5]} cuisine={cuisines[index + 5]} borderColor={selected[index + 5]? selectedColor: wfColor}/>
                </div>
            ))
        }  
    </div>
</div>

    )
  }
export default RestaurantCards;

