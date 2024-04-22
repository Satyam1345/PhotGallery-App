const  jwt =require("jsonwebtoken");
const appError=require("../utils/apperror")
const users = require("../model/user.model");
const isAuthuser = async (req, res, next) => {
    try{
    const token = req.cookies.token;
    console.log(token);
    if(!token)return next(new appError(401,"unauthorized please login to continue"));
   const verifytoken = jwt.verify(token, process.env.JWT_SECRET);
    console.log(verifytoken);
    if(!verifytoken ){
      return next(new appError(401,"unauthorized please login to continue"))
    }
    const mainuser=await users.findOne({_id:verifytoken._id});
    
    if(!mainuser){
      return next(new appError(401,"no user found"))
    }
    req.token=token
    req.mainuser=mainuser
    req.aadhar=mainuser.AadharNo
    req.UserId=mainuser._id
    
    next();
  }catch (error) {
    res.status(401).json({status:401,message:"Unauthorized no token provide"})
  }
  }
  module.exports={isAuthuser}