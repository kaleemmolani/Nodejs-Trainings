const express = require('express');
const { newContact, update } = require('../controllers/contact.controller');
const contactRouter = express.Router();


//all endpoint
contactRouter.get("/getAll")

contactRouter.post("/new",newContact);

contactRouter.patch("/update/:email",update);

contactRouter.delete("/delete/:email");


module.exports = contactRouter