const app = require('./src/api');
require('dotenv').config();

const PORT = process.env.API_PORT/*  || 3000 */;

app.listen(PORT, () => console.log('ouvindo porta', PORT));
