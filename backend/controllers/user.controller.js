const users = require("../model/user.model");
const bcrypt = require("bcrypt");
const { sendCookieuser } = require("../utils/cookies");
const registeruser = async (req, res) => {
    const {
      name,
      username,
      phonenumber,
      password,
    } = req.body;
  console.log(req.body);
    try {
      const user = await users.findOne({username:username});
      if (user) {
        res.status(422).json({ error: "This username is Already Exist" });
      } else {
        const finaluser = await users.create({
          name: name,
          username:username,
          phonenumber: phonenumber,
          password: password,
        });
        //here password hashed await finaluser.save();
        // console.log(finaluser)
        const storeData = await finaluser.save();
        console.log(finaluser)
        console.log(storeData);
        res.status(201).json({storeData });
      }
    } catch (error) {
      res.status(422).json(error);
      console.log("catch block error:", error);

    }
  };


  const login = async (req, res, next) => {
  const { username, password } = req.body;
  console.log(req.body);
  if (! username|| !password) {
    res.status(422).json({ error: "fill all the details" });
  }
  try {
    const user = await users.findOne({ username:username });
    console.log(user);
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      console.log(isMatch);
      if (!isMatch) {
        res.status(422).json({ error: "invalid details" });
      } else {
        const token = sendCookieuser(user, res, "success", 201);

        console.log(token);
        // res.status(200).json("successfully loggedin");

      }
    }
  } catch (error) {
    res.status(401).json(error);
    console.log("catch block");
  }
};
module.exports = {registeruser,login  };