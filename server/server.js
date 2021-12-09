const express = require("express");
const path = require("path");
const app = express();
const btcController = require("./btcController");

app.use(express.json());

app.use("/build", express.static(path.join(__dirname, "../build")));

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../index.html"));
});

app.get("/getPrice", btcController.getPrice, (req, res) => {
  res.status(200).send({ prices: res.locals.prices });
});

app.listen(3000, () => {
  console.log("Listening on 3000");
});
