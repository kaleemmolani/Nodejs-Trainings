const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createContact = async (contactDetail) => {
try {  
  const newContact  = await prisma.contact.create({
   data:{
     firstname:contactDetail.firstname,
     lastname:contactDetail.lastname,
     email:contactDetail.email
  }
 });
 return newContact;
} catch (error) {
  return error;
}
}


const updateContact = async (_email,_firstname,_lastname)=>{
  try {
     const existingContact = await prisma.contact.findFirst({
      where:{
        email:_email
      }
     })

     
     const updateContact = await prisma.contact.update({
      where:{id:existingContact.id},
      data:{
        firstname:_firstname,
        lastname:_lastname
      }
    })
     return updateContact
  } catch (error) {
    console.log(error);
  }
}

module.exports = {createContact, updateContact}