const express = require('express')
const userRouter = express.Router()
const UserController = require('../../controllers/user.controller')
const userController = new UserController();

userRouter.post('/register', userController.registerUser)
userRouter.post('/login', userController.loginUser)

module.exports = userRouter