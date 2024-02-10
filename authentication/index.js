const express = require("express");
const app = express();
const session = require('express-session');
const { authrouter } = require("./src/routes/auth.routes");
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const prisma = require("./src/models");
const { auth } = require("./src/middleware/auth.middleware");
const { req_logger } = require("./src/middleware/logger.middleware");
app.use(bodyParser.json())
app.use(cookieParser())
//setting view engine to ejs
app.set("view engine", "ejs");
app.use(express.static('public'));

app.use(session({
  secret: 'fjnjnfofbnjkn',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.use(req_logger);

app.get('/home',auth,(req,res)=>{
  res.render('pages/home')
})

app.get('/',auth,async (req,res)=>{
  try {
      console.log("render index")
      res.render('pages/index',{data:{firstname:user.Firstname,lastname:user.LastName,email:user.Email}})

  } catch (error) {
    res.send(error);
  }
});

app.get('/login',(req,res)=>{

    res.render('pages/login')

});

app.get('/signup',(req,res)=>{

  res.render('pages/signup',{data:{login:true}})
})

app.use('/user',authrouter);

app.listen(3006,()=>{
  console.log(`server started as 3006`)
})