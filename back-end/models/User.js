const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const Blogs = require('../models/Blogs')

//TO DESCRIBE OUR BLOGS SCHEMA
const userSchema = new mongoose.Schema({
  firstName:{
    type:String,
    require:true,
    trim:true,
    min:3,
    max:30
},
lastName:{
  type:String,
  require:true,
  trim:true,
  min:3,
  max:30
},
userName:{
  type:String,
  require:true,
  trim:true,
  unique:true,
  index:true,
  lowercase:true
},
email:{
  type:String,
  require:true,
  trim:true,
  unique:true,
  lowercase:true
},
hash_password:{
    type:String,
    required:true,
    minlength:8
},
role:{
  type:String,
  enum:['user', 'admin'],
  default:'admin'
},
contactNumber:{
  type:String,
  require:true,
  trim:true,
  
},
profilePicture:{
  type:String,
  require:true,
  
},
  
},{ timestamps:true})

userSchema.virtual('password')
  .set( function(password){
   this.hash_password = bcrypt.hashSync(password, 12)
  })

  //we can create here a virtual for our fullName
  userSchema.virtual('fullName')
  .get(function(){
    return `${this.firstName} ${this.lastName}`;
  })

  userSchema.methods = {
    authenticate: function(password){
      return bcrypt.compareSync(password, this.hash_password)
    }
  }

//to remove the underscore id for the client
// userSchema.method('toJSON', function(){
//   const { __v, _id, ...object } = this.toObject();
//   object.id = _id;
//   return object;
// })

userSchema.methods.toJSON = function (){
  const user = this.toObject()
  delete user.password
  return user;
}







// export model user with UserSchema
const User = mongoose.model('User', userSchema)
module.exports = User
