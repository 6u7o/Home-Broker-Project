const app = require('./src/api');
require('dotenv').config();

const {PORT} = process.env/*  || 3000 */;

app.listen(PORT, () => console.log('ouvindo porta', PORT));
