import React from "react";
import { useState, useEffect } from "react";
import { AppBar, Button, Box, Toolbar, Typography } from "@mui/material";
import fetch from "node-fetch";

function NavBar(props) {
  const displayPrice = Math.trunc(props.fullBtcPrice)

  return (
    <Box
      sx={{ width: "100%", display: "flex"}}
    >
      <AppBar position="static">
        <Toolbar sx={{justifyContent: 'center'}}>
          <Typography>Current Btc Price: ${displayPrice}.00</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
