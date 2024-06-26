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
      <div className="shadow-lg transition-transform duration-200 ease-in-out hover:scale-105" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '16rem', height: '23rem', borderRadius: '1rem', border: `2px solid  ${props.borderColor}`, margin: '0.75rem', backgroundColor: 'white'}}
      onClick={handleClick}>
        <Grid container  justifyContent="center"  spacing={1} sx={{ height: "100%" }}>
          <Grid item xs={12} sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              margin: "0.5rem",
            }}> 
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight:'bold' }}>
              <a href={props.yelpUrl} target="_blank" style={{ color: 'black', textDecoration: 'none' }}>
                {props.name}
              </a>
            </div>
            </Grid>
            <Grid item xs={12} sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}> 
              <div className='flex w-full h-48 justify-center items-center'>
            <img src={props.imagePath} style={{ border: `2px solid  ${props.borderColor}` , width:'90%',height:'90%' , objectFit:'cover'}}/>         
            </div>
            </Grid>
            <Grid item xs={12} sx={{
                display: "flex",
                justifyContent: "top",
                alignItems: "center",
                flexDirection: "column",
              }}> 
              <StarRating rating={props.rating} colorString={props.borderColor}/>
            </Grid>
              <Grid item xs={12} sx={{
                display: "flex",
                justifyContent: "top",
                alignItems: "center",
                flexDirection: "column",
              }}> 
            <div className="flex flex-row" style={{ fontFamily: 'Inter, sans-serif', fontWeight:'bold' }}>
          {props.cuisine.map((cuisine, index) => (
            <div className="p-1">
              <div key={index} style={{backgroundColor: 'lightgray', borderRadius: '10px', padding: '2px' }}>
                {cuisine}
              </div>
            </div>
          ))}
          </div>
          </Grid>
        </Grid>
          
        
      </div>
      )
  }
  export default ResturantCard;
