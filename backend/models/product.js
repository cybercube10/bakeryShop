const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true,
    min: 0,
  },
  description:{
    type:String,
    required:true
  },
  category:{
    type: String,
    enum: ['Cakes', 'Pastry', 'Cookies', 'Candies','Bouquet',], 
    required: true,
  } ,
  image: { type: String }, 
}, { timestamps: true })

const Product = mongoose.model('Product',productSchema)
module.exports = Product