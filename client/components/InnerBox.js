import React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  InputAdornment,
  Container,
} from "@mui/material";

import UseAnimations from 'react-useanimations'
import arrowUp from 'react-useanimations/lib/arrowUp'

function InnerBox(props) {

  const direction = props.swap ? 'rotate(270deg)' : 'rotate(90deg)'

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "background.inner",
        border: 1,
        borderRadius: 1,
        p: 2,
        width: "30vw",
        height: "20vh",
        boxShadow: "20",
        marginBottom: "10em",
      }}
    >
      <TextField
        label="USD amount"
        onChange={(e) => props.setUsdPrice(e.target.value)}
        value={props.usdPrice}
        sx={{ marginBottom: "3em", width: "10em" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">$USD</InputAdornment>
          ),
        }}
      />
      <Box sx={{ fontSize: 50, marginBottom: "1em" }}>
        <div style={{transform: `${direction}`}} onClick={() => props.setSwap(!props.swap)}>
        
           <UseAnimations
          animation={arrowUp}
          size={56}
          loop={false}
          autoplay={false}
        />
        
          
        </div>
      </Box>
      <TextField
        label="mBTC amount"
        onChange={(e) => props.setBtcPrice(e.target.value)}
        value={props.btcPrice}
        sx={{ marginBottom: "3em", width: "10em" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">mBTC</InputAdornment>
          ),
        }}
      />
      <Button
        onClick={() => props.getPrice()}
        sx={{ position: "absolute", marginTop: "5em", border: 1 }}
      >
        Convert Me
      </Button>
    </Box>
  );
}

export default InnerBox;
