let axios = require("axios")
module.exports.weatherApi = function(req,res){
    let body = req.body
    console.log(body)
    let url1=null
    let first = body.url.charAt(0)
    function getValueAtIndex(index){
      var str = body.url; //window.location.href; 
      return str.split("/")[index];
  }
  let weather =  getValueAtIndex(1)
  let key =  getValueAtIndex(2)
  let val =  getValueAtIndex(3)
    console.log(weather,key,val)
    if(weather=="weather"){
      if(key=="cityCode"){
        url1=`http://api.openweathermap.org/data/2.5/weather?id=${val}&appid=44b5f8c2e2c2717a855e2cf6afbb3619`
     }else if(key=="cityName"){
         url1=`http://api.openweathermap.org/data/2.5/weather?q=${val}&appid=44b5f8c2e2c2717a855e2cf6afbb3619`
     }
     else if(key=="pinCode"){
       url1=`http://api.openweathermap.org/data/2.5/weather?zip=${val}&appid=44b5f8c2e2c2717a855e2cf6afbb3619`
     }
    }else{
      if(first!="h"){
        url1="http://"+body.url
        console.log(url1)
      }else{
        url1=body.url
      }
    }console.log(url1)
    if (body.method == "GET") {
      axios.get(url1,body.headers==''?"":{headers:body.headers})
      .then(function (response) {
        console.log(response.data)
        res.send( response.data)
      }).catch(function (error) {
        if (error.response) {
          let { status, statusText } = error.response
          console.log(status, statusText)
          res.status(404).send(`${status}  ${statusText}`)
        } else {
          res.status(404).send(error)
        }
      })
    } 
    else if (body.method == "POST") {
      
      axios.post(url1,body.obj,body.headers?"":{headers:body.headers}).then(function (response) {
        console.log(response)
        res.send("" + response.data)
      }).catch(function (error) {
        if (error.response) {
          let { status, statusText } = error.response
          console.log(status, statusText)
          res.status(404).send(`${status}  ${statusText}`)
        } else {
          res.status(404).send(error)
        }
      })
    }
    else if (body.method == "PUT") {
      axios.put(url1,body.obj,body.headers[0].key==''?"":{headers:body.headers}).then(function (response) {
        console.log(response)
        res.send(response.data)
      }).catch(function (error) {
        if (error.response) {
          let { status, statusText } = error.response
          console.log(status, statusText)
          res.status(404).send(`${status}  ${statusText}`)
        } else {
          res.status(404).send(error)
        }
      })
    }
}
