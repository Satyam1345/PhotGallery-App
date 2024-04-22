const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv")
dotenv.config();
const uploadroute=require("./routers/upload.router")
const user=require("./routers/user.router")
const bodyParser=require("body-parser")
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use("/upload", uploadroute)
app.use("/user",user)
app.get("/", (req, res) => {
    res.send("Nice working");
  });
  module.exports=app;