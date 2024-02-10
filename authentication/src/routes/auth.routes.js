const express = require('express');
const { SignInController, SignUpController } = require('../controllers/user.controller');

const authrouter = express.Router();

authrouter.post('/login',SignInController);
authrouter.post('/signup',SignUpController);
module.exports = {authrouter}