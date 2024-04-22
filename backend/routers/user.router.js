const express=require("express");
const usercontroller =require("../controllers/user.controller");
const router=express.Router();


router.post('/register',usercontroller.registeruser)
router.post('/login',usercontroller.login)

module.exports=router