const express = require('express');
const cors = require('cors');
const gpio = require('onoff').Gpio;

const app = express();

app.use(cors());

app.get("/debug/:pin/:inout/:state",(req,res) => {
  var LED = new gpio(Number(req.params.pin),req.params.inout);
  LED.writeSync(Number(req.params.state));
});


app.listen(5565,() => {
  console.log("api server started.");
});