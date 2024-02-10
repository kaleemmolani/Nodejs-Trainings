const { newUser, findUser } = require("../models/user.model");
const { v4: uuidv4 } = require('uuid');
const { set_id } = require("../service/cache");
const SignUpController = async(req,res)=>{
  const UserData = req.body;
  console.log("controller",UserData)
  const user =  await newUser(UserData);
  res.send(user);
}

const SignInController = async(req,res)=>{
  const email = req.body.email;
  const password = req.body.password;
  const user = await findUser(email);
  if(user===undefined){
    res.send('user not found');
  }
  console.log(user,password)
  if(user.password===password){
    const token = uuidv4();
    set_id(token,user.Email);
    res.cookie('user_id', token);
    res.send({value:'success',userEmail:user.Email})
  } else {
    res.send('password is not correct')
  }
}

module.exports = {SignInController,SignUpController}