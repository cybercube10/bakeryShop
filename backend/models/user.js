const bcrypt = require('bcryptjs') 
const mongoose = require('mongoose'); 

const userSchema = new mongoose.Schema({
  username:{type:String,require:true,unique:true},
  password:{type:String,require:true},
  role: { type: String, enum: ['admin', 'guest', 'customer'], default: 'guest' }

})  

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('User', userSchema);
