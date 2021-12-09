import React from "react";
import {
  Box,
  Button,
  TextField,
  InputAdornment,
  Container,
} from "@mui/material";

function InnerBox(props) {
  
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
      <Box sx={{ fontSize: 50, marginBottom: "1em" }}>=</Box>
      <TextField
        label="mBTC amount"
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
