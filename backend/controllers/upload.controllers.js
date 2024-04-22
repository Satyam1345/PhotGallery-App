const uploadphoto = require("../model/upload.model");
const cloudinary = require("../utils/cloudinary");


const fetchphoto = async (req, res) => {
  try {
    const photo = await uploadphoto.find().sort({ createdAt: "descending" });
    res.status(200).json(photo);
  } catch (error) {
    console.error("Error fetching photos:", error);
    res.status(500).send("Internal Server Error");
  }
};
console.log(fetchphoto)


const postphoto = async (req, res) => {
  
  try {
      if (!req.file || !req.file.path) {
        return res.status(400).json({ error: 'No file uploaded' });
      }
  
   const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'images', // Assuming 'products' is the folder name
      // width:300,
      // crop:"scale"
    });
    
    const info = await uploadphoto.create({
      photos: {
        public_id: result.public_id,
        url: result.secure_url,
      },

      
    });
    console.log("added")
    console.log(info)
  

    
    return res.status(201).json({ status: 201, info ,result});
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
}

  // console.log(photos);
  // const upload=await uploadphoto.create(photos);
  // const data=await upload.save();
  // console.log(data);
  //   res.status(201).json({ status: 201, data

module.exports = { fetchphoto, postphoto };
