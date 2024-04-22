const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema(
  {
    photos: {
      // type: String,
      // required: true,
      public_id:{
        type:String,
        required:true
      },
      url:{
        type:String,
        required:true
      }
    },
  },
  { timestamps: true }
);
const uploadphoto =mongoose.model("uploadphoto",uploadSchema)
module.exports=uploadphoto;
// module.exports = mongoose.model("Upload", uploadSchema);