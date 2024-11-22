const express = require('express')
const Product = require('../models/product')
const router = express.Router()
const upload = require('../middleware/filehandler')
const fs = require('fs') 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user'); 
const path = require('path') 


router.post('/',upload.single('image'),async (req,res)=>{
  try {
    const newProduct = new Product({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      image: req.file.path, 
    });
  await newProduct.save()
  res.status(201).json({newProduct})
  } catch (error) {
    console.log(error);
    
    res.status(500).json({message:error.message})
  }
})  

router.get('/', async (req, res) => {
  const {category} = req.query
  let products
  try {
    if(category)
     {products = await Product.find({category});}  
    else {
      products = await Product.find()
    }
    res.json(products);
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ message: error.message });
  }
}); 


// this router helps admin delete products 
router.delete('/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ message: error.message });
  }
});



// this route gets testimonials 
router.get('/testimonials',(req, res) => {
  const testimonialsPath = path.join(__dirname, "../testimonials.json");
  
  fs.readFile(testimonialsPath, "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Failed to load testimonials" });
    } else {
      const testimonials = JSON.parse(data);
      res.json(testimonials);
    }
  })})



module.exports = router