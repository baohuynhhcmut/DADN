const express = require("express");
const router = express.Router()
const UserController = require("../controller/user.controller")

router.post('/register',UserController.RegisterUser)
router.get('/email',UserController.GetUserInfoByEmail)
router.get('/',UserController.GetAllUser)



module.exports =  router