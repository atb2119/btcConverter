import React from "react";
import { useState, useEffect } from "react";
import { Container, Box, Button, Typography } from "@mui/material";
import InnerBox from "./InnerBox";
import NavBar from "./NavBar";
import fetch from "node-fetch";

function MainContainer() {
  const [usdPrice, setUsdPrice] = useState(0);
  const [btcPrice, setBtcPrice] = useState(0);
  const [fullBtcPrice, setFullBtcPrice] = useState(0)
  const getPrice = () => {
    fetch("/getPrice")
      .then((res) => res.json())
      .then((data) => setBtcPrice(usdPrice / (data.price / 1000)))
      .catch((err) => console.log("getPrice error", err));
  };

  useEffect(() => {
    const fetchPrice = () => {
      fetch("/getPrice")
        .then((res) => res.json())
        .then((data) => {setUsdPrice(data.price / 1000); setFullBtcPrice(data.price)})
        .then(setBtcPrice(1))
        .catch((err) => console.log("useffect fetchprice error", err));
    };
    fetchPrice();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "background.paper",
        width: "100vw",
        height: "100vh",
        margin: "0",
        padding: "0",
      }}
    >
      <NavBar fullBtcPrice={fullBtcPrice} />
      <Typography variant="h3" sx={{ p: "1em", fontWeight: "medium" }}>
        mBTC Converter
      </Typography>
      <InnerBox
        usdPrice={usdPrice}
        setUsdPrice={setUsdPrice}
        btcPrice={btcPrice}
        setBtcPrice={setBtcPrice}
        getPrice={getPrice}
      />
    </Box>
  );
}

export default MainContainer;
