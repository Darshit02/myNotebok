const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

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
    //    check whether the user whith this email exists alredy
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ email: "Sorry a User with email alredy exists" });
      }
    //   A New User Was Created 
      let = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      });

      res.json(user);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("some error occcured");
    }
  }
);
module.exports = router;
