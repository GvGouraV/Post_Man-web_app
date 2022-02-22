 let express = require("express");
 let app = express();
 app.use(express.json());
 app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header(
     "Access-Control-Allow-Methods",
     "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
   );
   res.header(
     "Access-Control-Allow-Headers",
     "Origin, X-Requested-With,Content-Type, Accept"
   );
   next();
 });


 var routes = require("./routes/index.js")

 app.use("/postUrl",routes)


 var port = process.env.PORT || 2410;
 app.listen(port, () => console.log(`Listening on port ${port} !`));