const mongoose = require('mongoose')
const connectDB = async (url)=>{
try {
  await mongoose.connect(url)
  console.log('connected to db successfully');
} catch (error) {
  console.log('error connecting to db'); 
}
}
 
module.exports = connectDB