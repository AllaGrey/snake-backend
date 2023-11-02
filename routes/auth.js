const express = require('express');
const authRouter = express.Router();
const  { authCtrl }  = require('../controllers');

authRouter.post('/register', authCtrl.register)
// authRouter.post('/login',)
// authRouter.post('/logout',)


module.exports = authRouter;