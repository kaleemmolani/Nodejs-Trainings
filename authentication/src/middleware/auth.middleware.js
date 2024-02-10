const { get_id } = require("../service/cache");

const auth  = (req,res,next)=>{
  if(req.cookies?.user_id){
    if(get_id(req.cookies?.user_id)){
      next()
    }else {
      res.redirect('/login');
    }
  }else {
    res.redirect('/login');
  }
}

module.exports = {auth};