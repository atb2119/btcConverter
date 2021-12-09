const fetch = require("node-fetch");

const btcController = {};

const lastWeek = () => {
  const today = new Date();
  const l = new Date(today);
  l.setDate(l.getDate() - 8)
  return Date.parse(l)
}

const today = Date.now();
const backThen = lastWeek()

const url = `https://api.coincap.io/v2/assets/bitcoin/history?interval=d1&start=${backThen}&end=${today}`

btcController.getPrice = async (req, res, next) => {
  try {
    const response = await fetch(url);
    const { data } = await response.json();
    // const todayPrice = parseInt(data[0].priceUsd);
    // res.locals.todayPrice = todayPrice;
    const prices = data.map((ele) => parseInt(ele.priceUsd));
    console.log(prices)
    res.locals.prices = prices
    return next();
  } catch (e) {
    return next(e);
  }
};

module.exports = btcController;
