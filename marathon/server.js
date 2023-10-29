const express = require('express');
const contactRouter = require('./src/routes/contact.routes');
const app = express();
const bodyParser = require('body-parser');

app.get('/',(req,res)=>{
  res.send("server is running at 3004");
})

app.use(bodyParser.json());

app.use("/contact",contactRouter);

app.listen(3004);