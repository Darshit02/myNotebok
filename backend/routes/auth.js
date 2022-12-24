const express = require('express');
const User = require("../models/User");
const router = express.Router();
const {body ,validationResult} = require('express-validator')
// create A User Using : POST "/api/auth/ . Dosen't Require Auth"
router.post('/' ,[
    body('name').isLength({min:3}),
    body('email').isEmail(),
    body('password','password Must Be 5 cherecter').isLength({min:5}),
] ,(req,res) => {
   const errors = validationResult(req);
   if(!errors.isEmpty()){
    return res.status(400).json({ errora :console.errors.array()})
   }
   User.create({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
   }).then(user => res.json(user))
   .catch(err => {console.log(err)
req.json({error : 'Please Enter a Unique Value for Email'})})
    
})
module.exports = router