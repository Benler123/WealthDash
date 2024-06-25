import React, { Component, useState } from 'react';
import ResturantCard from './components/ResturantCard';
import CachedIcon from '@mui/icons-material/Cached';

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

    return (
<div className="flex w-full justify-between flex-col">
    <div className="flex flex-row w-full justify-between pb-4">
        {
            resturants.slice(0,5).map((resturant, index) => (
                 <div className={`transition ease-in-out w-auto ${expand && `translate-x-["${17.7 * (5 - index)}"em] translate-y-[18em]`}`}>
                <ResturantCard key={index} name={resturant} imagePath={images[index]} rating={ratings[index]} cuisine={cuisines[index]}/>
                </div>
            ))
        }
        <div className="w-24 bg-indigo-500 text-5xl" onClick={() => setExpand(!expand)}><CachedIcon fontSize="inherit"/></div>
        
    </div>
    <div className="flex flex-row w-full justify-between">{
            resturants.slice(5,10).map((resturant, index) => (
                <div className={`transition ease-in-out w-auto ${expand && `translate-x-["${17.7 * (10 - index)}"em]`}`}>
                <ResturantCard key={index} name={resturant} imagePath={images[index]} rating={ratings[index]} cuisine={cuisines[index]}/>
                </div>
            ))
        }  
    </div>
</div>

    )
  }
export default RestaurantCards;

