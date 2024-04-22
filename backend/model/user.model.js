const mongoose=require("mongoose");
const bcrypt = require("bcrypt");
const asUser=new mongoose.Schema({
    name:{
        type:String,
        // required:true
    },
    username:{
        type:String,
        unique:true,
        // required:true
    },
    phonenumber:{
        type:String,
        // unique:true,
        // required:true
    },
    password:{
        type:String,
        // required:true
    },
    
},{timestamps:true});
asUser.pre('save', async function (next) {
    // If password is not modified then do not hash it
    if (!this.isModified('password')) return next();
  
     this.password = await bcrypt.hash(this.password, 10);
   });

const users = mongoose.model("users",asUser)
module.exports=users;
