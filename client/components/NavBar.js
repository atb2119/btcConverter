import React from "react";
import { useState, useEffect } from "react";
import { AppBar, Button, Box, Toolbar, Typography } from "@mui/material";
import fetch from "node-fetch";
import UseAnimations from "react-useanimations";
import menu2 from 'react-useanimations/lib/menu2'

function NavBar(props) {
  const displayPrice = Math.trunc(props.fullBtcPrice)
  const bottom = document.querySelector('#bottom')
  const handleClick = () => {
    bottom.scrollIntoView({behavior: "smooth"})
  }

  return (
    <Box
      sx={{ width: "100%", display: "flex", }}
    >
      <AppBar position="static">
        <Toolbar sx={{justifyContent: 'space-between', bgcolor: 'background.appBar'}}>
          <Button variant="contained"
          onClick={()=>handleClick()}>About</Button>
          <Typography sx={{color: 'black'}}>Current Btc Price: ${displayPrice}.00</Typography>
          <Button variant="contained"
          onClick={()=>props.refresh()}>Refresh</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
