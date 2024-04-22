const mongoose = require('mongoose');

const photogallery =process.env.DBURI

const connectToDBs = async () => {
  try {
    await mongoose.connect(photogallery , {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      
    });
    console.log('Connected to  database');
  } catch (error) {
         console.error('Database connection error:', error);
      
}
}
module.exports = connectToDBs