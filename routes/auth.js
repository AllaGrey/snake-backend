const express = require('express');
const authRouter = express.Router();
const { authCtrl } = require('../controllers');
const { registerValidation, loginValidation, authenticate } = require('../middlewares/auth')

authRouter.post('/register', registerValidation, authCtrl.register)
authRouter.post('/login', loginValidation, authCtrl.login);
authRouter.post('/logout', authenticate, authCtrl.logout);

authRouter.get('/current', authenticate, authCtrl.getCurrentUser);

module.exports = authRouter;