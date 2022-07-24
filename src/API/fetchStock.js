const { default: axios } = require('axios');
const getYesterdayDate = require('../utils/yesterdayDate');

const getStockInfo = async (stockId) => {
    const API_KEY = 'A05DNR2DO35CCPTG'
    let aplphaUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockId}&apikey=${API_KEY}`;
    const res = await axios.get(aplphaUrl);
    const stock = res.data['Time Series (Daily)'][getYesterdayDate()];

    const closedPrice = stock['4. close'];
    const stockVolume = stock['5. volume'];
    return { 
      name: stockId,
      price: closedPrice,
      volume: stockVolume
    }
}

module.exports = getStockInfo;