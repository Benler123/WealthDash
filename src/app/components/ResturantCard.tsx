'use client';
import React, { Component, useState } from 'react'
import Grid from "@mui/material/Grid";
import { Star } from 'lucide-react';
import StarRating from './StarRating';
import { Inter } from "next/font/google";

interface ResturantCardProps {
  name: string;
  imagePath: string;
  rating: number;
  borderColor: string;
  cuisine: string[];
  yelpUrl: string;
}

function ResturantCard(props: ResturantCardProps) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      setIsClicked(!isClicked);
    };
  
  
    return (
    <div 
      className={`shadow-lg transition-transform duration-200 ease-in-out ${isClicked ? 'scale-105' : 'hover:scale-105 border-0'}`}
      style={{
        backgroundColor: 'rgb(70, 62, 188)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '22rem',
        borderRadius: '1rem',
        margin: '0.5rem',
        padding: '0'
      }}
      onClick={handleClick}
    >
      <Grid container justifyContent="center" alignItems="top" spacing={1} style={{ display: 'flex', gap: '0.5rem', width: '100%', margin: '0'}}>
        <Grid item xs={12} sx={{ display: 'grid', justifyContent: "center", alignItems: "center", width: '100%'}} style={{ paddingLeft: '0', paddingTop: '0'}}>
          <div className='flex w-full h-40 justify-center items-center' style={{ width: '100%' }}>
            <img 
              src={props.imagePath} 
              style={{
                width: '22rem',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '1rem 1rem 0rem 0rem',
                maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)'
              }} 
            />
          </div>
        </Grid>
        <Grid 
          item 
          xs={12} 
          sx={{ 
            display: "flex", 
            justifyContent: "left", 
            alignItems: "top", 
            flexDirection: "column", 
          }}
        >
          <div
            className='flex h-28 w-full hjustify-top items-left'
            style={{ 
              fontFamily: 'Roboto, sans-serif', 
              fontWeight: 'bolder', 
              lineHeight: '1.2',
              overflow: 'hidden', 
              textOverflow: 'ellipsis' 
            }}
          >
            <a 
              href={props.yelpUrl} 
              target="_blank" 
              style={{ 
                color: props.borderColor, 
                textDecoration: 'none', 
                fontSize: "1.4rem" 
              }}
            >
              {props.name}
            </a>
          </div>
        </Grid>
        <Grid 
          item 
          xs={12} 
          sx={{ 
            display: "flex", 
            justifyContent: "top", 
            alignItems: "left", 
            flexDirection: "column",
            marginTop: "-4rem"
          }}
        >
          <StarRating rating={props.rating} colorString={props.borderColor} />
        </Grid>
        <Grid 
          item 
          xs={12} 
          sx={{ 
            display: "flex", 
            justifyContent: "top", 
            alignItems: "left", 
            flexDirection: "column",
          }}
          style={{
            flexGrow: '1'
          }}
        >
          <p>
          </p>
        </Grid>
        <Grid 
          item 
          xs={12} 
          sx={{ 
            display: "flex", 
            justifyContent: "bottom", 
            alignItems: "left", 
            flexDirection: "column" 
          }}
        >
          <div className="flex" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', marginTop: '-1rem'}}>
            {props.cuisine.map((cuisine, index) => (
              <div className="p-1" key={index}>
                <div 
                  style={{ 
                    backgroundColor: 'white', 
                    borderRadius: '10px', 
                    padding: '2px', 
                    paddingLeft: '5px', 
                    paddingRight: '5px' 
                  }}
                >
                  <p style={{ color: "rgb(70, 62, 188)"}}>
                    {cuisine}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );

  }
  export default ResturantCard;
