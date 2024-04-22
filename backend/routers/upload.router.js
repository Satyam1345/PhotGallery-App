const express=require("express");
const uploadcontroller =require("../controllers/upload.controllers");
const {upload}=require("../middlewares/multer.middleware")
const {isAuthuser}=require("../middlewares/auth.middleware")
const router=express.Router();

router.get('/get',uploadcontroller.fetchphoto);
router.post('/post',upload.single('photos') ,uploadcontroller.postphoto);
module.exports=router;
// uploadphotoMiddleware,isAuthuser, upload.single('file'),