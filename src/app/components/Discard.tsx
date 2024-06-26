'use client';
import React, { Component, useState } from 'react'
import Grid from "@mui/material/Grid";
import { Typography } from '@mui/material';
import { Star } from 'lucide-react';
import StarRating from './StarRating';
import { Inter } from "next/font/google";


function Discard() {
    const [isClicked, setIsClicked] = useState(false);

    const wfColor = "rgb(70,62,188)"
    const handleClick = () => {
      setIsClicked(!isClicked);
    };
  
  
    return (
      <div className="flex shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 w-full" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '23rem', borderRadius: '1rem', border: `4px dashed ${wfColor}`, margin: '0.5rem'}}
      onClick={handleClick}>
        <Grid container  justifyContent="center">
            <Typography variant="h3" component="div" fontWeight="bolder" fontFamily={"Roboto, sans-serif"} color={wfColor}>
                Submit Deck
            </Typography>
          {/* <img src={"/wf.jpg"} style={{width: '100%', height: 'auto'}}/>  */}
        </Grid>
      </div>
      )
  }
  export default Discard;
