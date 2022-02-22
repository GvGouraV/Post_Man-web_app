var express = require("express")
var router = express.Router()
 var weather = require("../controler/weather.js")
 router 
  .route("/")
  .post(weather.weatherApi)


module.exports = router