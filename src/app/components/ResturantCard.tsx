import React, { Component } from 'react'
import Grid from "@mui/material/Grid";
import { Star } from 'lucide-react';
import StarRating from './StarRating';

export default class ResturantCard extends Component {
  render() {
    return (
      <div className="shadow-lg transition-transform duration-200 ease-in-out hover:scale-105" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '16rem', height: '21rem', borderRadius: '0.4rem', border: '2px solid rgb(70, 62, 188)', margin: '0.75rem' }}>
        <Grid container  justifyContent="center"  spacing={1} sx={{ height: "100%" }}>
          <Grid item xs={12} sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}> 
            <div>
              Title
            </div>
          </Grid>
          <Grid item xs={12} sx={{
              display: "flex",
              justifyContent: "top",
              alignItems: "center",
              flexDirection: "column",
            }}> 
          <img src="download.jpeg" style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }}/>         
           </Grid>
          <Grid item xs={12} sx={{
              display: "flex",
              justifyContent: "top",
              alignItems: "center",
              flexDirection: "column",
            }}> 
            <StarRating rating={3.4}/>
          </Grid>
            <Grid item xs={12} sx={{
              display: "flex",
              justifyContent: "top",
              alignItems: "center",
              flexDirection: "column",
            }}> 
              <div>
                cuisine
              </div>
          </Grid>
        </Grid>
          
        
      </div>
      )
  }
}
