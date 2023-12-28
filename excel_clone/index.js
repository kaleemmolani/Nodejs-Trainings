const express = require("express");
const app = express();
const {readDataFromFile} = require("./src/fileoperation");
//setting view engine to ejs
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get('/',(req,res)=>{
  const data = readDataFromFile('./files/test.json');
  res.render('pages/index',{data:data})
})
app.post('/data',(req,res)=>{
  const data = readDataFromFile('./files/test.json');

  res.send(data);
})



app.listen(3006,()=>{
  console.log(`server started as 3006`)
})