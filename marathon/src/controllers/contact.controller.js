const { createContact, updateContact } = require("../models/contact.models");

const newContact = async (req,res)=>{

  const Contact = {
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    email:req.body.email
  }
try {  
  const _newcontact =await createContact(Contact);
  res.send(_newcontact);
} catch (error) {
  res.send({
    "message":error
  })
}
}

const update =async (req,res)=>{
  const Contact = {
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    email:req.params.email
  }

  try {
    const updatedContact  =await updateContact(Contact.email,Contact.firstname,Contact.lastname);
    res.send(updatedContact);
  } catch (error) {
    res.send(error)
  }

}

module.exports = {newContact,update}