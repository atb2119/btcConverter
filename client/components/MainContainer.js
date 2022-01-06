import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography, Snackbar, Alert } from "@mui/material";
import InnerBox from "./InnerBox";
import NavBar from "./NavBar";
import fetch from "node-fetch";
import Graph from "./Graph";

function MainContainer() {
  const [usdPrice, setUsdPrice] = useState(0);
  const [btcPrice, setBtcPrice] = useState(1);
  const [fullBtcPrice, setFullBtcPrice] = useState(0);
  const [weekPrices, setWeekPrices] = useState([]);
  const [swap, setSwap] = useState(false);
  const [loadError, setLoadError] = useState(false);

  const handleErrorClose = (event, reason) => {
    if (reason === "clickaway") return;
    setLoadError(false);
  };

  //for initial load and refresh button - auto populates usd price per 1 mBTC
  const refresh = () => {
    fetch("/getPrice")
      .then((res) => res.json())
      .then((data) => {
        setUsdPrice(data.prices[0] / 1000);
        setFullBtcPrice(data.prices[0]);
        setWeekPrices(data.prices);
      })
      .then(setBtcPrice(1))
      .catch((err) => {
        console.log("getPrice error", err);
        setLoadError(true);
      });
  };

  //for clicking convert button - fetch latest data, check conversion direction and render accordingly
  const getPrice = () => {
    fetch("/getPrice")
      .then((res) => res.json())
      .then((data) => {
        setWeekPrices(data.prices);
        swap
          ? setUsdPrice((data.prices[0] / 1000) * btcPrice)
          : setBtcPrice(usdPrice / (data.prices[0] / 1000));
      })
      .catch((err) => {
        console.log("getPrice error", err);
        setLoadError(true);
      });
  };

  useEffect(() => {
    getPrice();
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
      <NavBar fullBtcPrice={fullBtcPrice} refresh={refresh} />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={loadError}
        autoHideDuration={5000}
        onClose={handleErrorClose}
      >
        <Alert
          onClose={handleErrorClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          Error fetching prices, please wait a second and try again.
        </Alert>
      </Snackbar>
      <Typography variant="h3" sx={{ p: "1em", fontWeight: "medium" }}>
        mBTC Converter
      </Typography>
      <InnerBox
        usdPrice={usdPrice}
        setUsdPrice={setUsdPrice}
        btcPrice={btcPrice}
        setBtcPrice={setBtcPrice}
        getPrice={getPrice}
        swap={swap}
        setSwap={setSwap}
      />
      <Graph weekPrices={weekPrices}></Graph>
    </Box>
  );
}

export default MainContainer;
