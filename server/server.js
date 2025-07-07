// const express = require('express');
// const app = express();
// const port = 3000;

// app.set("view engine", "ejs")

// // Middleware
// app.use(function(req, res, next) {
//   console.log("middleware");
//   next();
// });

// // Route
// app.get("/", function(req, res) {
//   res.render("index");
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

// app.use(function errorHandler(err,req,res,next){
//   if (res.headersSent){
//     return next(err)
//   }
//   res.status(500)
//   res.render('error',{error:err}) // here the error page will render
// })

const express = require('express')
const app = express()
const port = 3000

app.set("view engine", "ejs")

app.use(express.static('public'));

app.get('/',function(req,res){
  res.render('index');
})

app.listen(port,()=> {
  console.log(`server is running at http://localhost:${port}`);
})