require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const productsRoute = require('./api/products/products.route');
const guestsRoute = require('./api/guests/guests.route');

const corsOptions  = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/products", productsRoute);
app.use("/api/guests", guestsRoute);

app.listen(process.env.APP_PORT, () => {
  console.log('Working', process.env.APP_PORT);
})
