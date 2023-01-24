const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const JWT_SECRET = "Darshit Is A Good Boy"

// create A User Using : POST "/api/auth/createUser . No Login required"
router.post(
  "/createUser",
  [
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password", "password Must Be 5 cherecter").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // If There are Errors return bed Request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errora: console.errors.array() });
    }
    try {
      //    check whether the user whith this email exists alredy
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ email: "Sorry a User with email alredy exists" });
      }

      const salt =await bcrypt.genSalt(10)
      const secPass = await bcrypt.hash(req.body.password, salt)

    //   A New User Was Created 
        user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });

      const data = {
        user : {
          id : user.id
        }
      }


     const authtocken =  jwt.sign(data, JWT_SECRET);
    //  console.log("jwtData")

      res.json({authtocken});
    } catch (error) {
      console.log(error.message);
      res.status(500).send("some error occcured");
    }
  }
);
module.exports = router;
