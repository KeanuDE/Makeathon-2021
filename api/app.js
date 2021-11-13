const express = require('express');
const cors = require('cors');
const gpio = require('onoff').Gpio;

const app = express();
app.use(cors());

var devices = [];


app.get("/debug/:pin/:inout/:state",(req,res) => {
  var LED = new gpio(Number(req.params.pin),req.params.inout);
  LED.writeSync(Number(req.params.state));
  res.status(200);
});





//TODO: Geräte bekommen

//TODO: Gerät hinzufügen

//TODO: rgb code (lesen)

//rgb code (schreiben)
app.get("/sendRGB/:id/:r/:g/:b",(req,res) => {
  var color = {
    red: req.params.r,
    green: req.params.g,
    blue: req.params.b
  }
  //TODO: send code
  res.status(200);
})




app.listen(5565,() => {
  console.log("api server started.");
});