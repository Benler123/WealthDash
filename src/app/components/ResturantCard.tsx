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
  cuisine: string;
}

function ResturantCard(props: ResturantCardProps) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      setIsClicked(!isClicked);
    };
  
  
    return (
      <div className="shadow-lg transition-transform duration-200 ease-in-out hover:scale-105" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '16rem', height: '23rem', borderRadius: '1rem', border: `2px solid  ${props.borderColor}`, margin: '0.75rem'}}
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
              {props.name}
            </div>
            </Grid>
            <Grid item xs={12} sx={{
                display: "flex",
                justifyContent: "top",
                alignItems: "center",
                flexDirection: "column",
              }}> 
            <img src={props.imagePath} style={{ border: `2px solid  ${props.borderColor}` , maxWidth: '80%', minWidth: '80%', maxHeight: '90%', minHeight: '90%', height: 'auto'}}/>         
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
            <div style={{ fontWeight:'bold', fontFamily: 'Inter, sans-serif', backgroundColor: 'lightgray', borderRadius: '8px', padding: '8px' }}>
              {props.cuisine}
            </div>
          </Grid>
        </Grid>
          
        
      </div>
      )
  }
  export default ResturantCard;
