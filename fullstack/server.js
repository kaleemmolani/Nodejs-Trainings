const express = require("express");
const app = express();

//setting view engine to ejs
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get('/',(req,res)=>{
  res.render('pages/index')
})

app.listen(3006,()=>{
  console.log(`server started as 3006`)
})