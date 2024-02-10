const prisma = require('./index');
const newUser = async (UserData)=>{
  try {
    console.log(UserData)
    const existingUser = await prisma.user.findFirst({where:{Email:UserData.Email}});
    if(existingUser){
      return "User already Exist"
    }
    const newUser = await prisma.user.create({data:UserData})
    return newUser;
  } catch (error) {
    console.log(error)
    return error
  }
}

const findUser = async (email)=>{
  try {
    const existingUser = await prisma.user.findFirst({where:{Email:email}});
    if(existingUser){
      return existingUser;
    }
    return "User does not Exist"
  } catch (error) {
    console.log(error)
    return error
  }
}

module.exports = {newUser,findUser}