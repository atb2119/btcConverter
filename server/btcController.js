const fetch = require("node-fetch");

const btcController = {};

btcController.getPrice = async (req, res, next) => {
  try {
    const response = await fetch("https://api.coincap.io/v2/assets/bitcoin");
    const { data } = await response.json();
    const price = data.priceUsd;
    res.locals.price = price;
    return next();
  } catch (e) {
    return next(e);
  }
};

module.exports = btcController;
