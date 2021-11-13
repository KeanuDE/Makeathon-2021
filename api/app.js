const express = require('express');
const cors = require('cors');
const gpio = require('onoff').Gpio;

const app = express();

app.use(cors());

app.listen(5565,() => {
  console.log("api server started.");
});