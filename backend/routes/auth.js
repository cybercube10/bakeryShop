
const user = require('../models/user') 
const express = require('express')
const router = express.Router()
require('dotenv').config();
const jwt = require('jsonwebtoken')

router.post('/register',async()=>{
  const {username,password,role} = req.body 
  try{
   const user = new user({username,password,role})
   await user.save()
   res.staus(201).json({message:'User registered successfully'})
  }
  catch(error){
   res.staus(500) .message('User registeration unsuccessfull')
  }
}) 


 router.post('/login',async()=>{
  const {username,password,role} = req.body 
  try {
    const User = user.findOne({username})
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ error: 'Invalid credentials' });
  } 
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET_KEY,  // Using the secret from the .env file
    { expiresIn: '1h' }
);
  } catch (error) {
   res.status(500).send('login failed')
  }
 })