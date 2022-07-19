const { default: axios } = require('axios');
var request = require('request');
const getYesterdayDate = require('../utils/yesterdayDate');

// const getYesterdayDate = require('../utils/yesterdayDate')

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
var aplphaUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo';



// const getStockInfo = async () => {
//   const stockData = await request.get({
//     url: url,
//     json: true,
//     headers: {'User-Agent': 'request'}
//   }, (err, res, data) => {
//     if (err) {
//       console.log('Error:', err);
//     } else if (res.statusCode !== 200) {
//       console.log('Status:', res.statusCode);
//     } else {
//       // data is successfully parsed as a JSON object:
//       const stock = data['Time Series (Daily)'][getYesterdayDate()]/* ['5. volume'] */ 
//       return res.body;
//     }
//   });
//   return stockData;
// }

const getStockInfo = async () => {
    const res = await axios.get(aplphaUrl);
    const stock = res.data['Time Series (Daily)'][getYesterdayDate()]/* ['5. volume'] */
    return stock;
}

module.exports = getStockInfo;