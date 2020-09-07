const User = require('../../models/User')
//const { authSchema } = require('../helpers/User-Schema-validation')
const JWT = require('jsonwebtoken')
const { validationResult } = require('express-validator');




exports.signup = async (req, res) => {

  const {fristName, lastName, userName, email, password} = req.body
  const user = new User({
    fristName:req.body.fristName,
    lastName:req.body.lastName,
    userName:req.body.userName,
    email:req.body.email,
    password:req.body.password,
    role:'admin'
  })
   
    try{
      User.findOne({email: req.body.email})
       const users =  await user.save()
        res.status(201).json({
          status:'admin created successfully',
          user:users,
          
        })
        const errors = validationResult(req)
        if(!errors){
          return next()
        }
    }catch(errors){
        res.status(400).json({
          status:'admin already exist',
          errors:errors
        })
    }
 
}

exports.signin = async (req, res) => {
  
   try {
   const user = await User.findOne({email:req.body.email})
    if(user){
      if(user.authenticate(req.body.password) && user.role === 'admin'){
        const token = JWT.sign({_id:user._id, role: user.role}, process.env.JWT_SECRET_KEY,{expiresIn:process.env.JWT_EXPIRES_IN})
       const {_id,fristName, lastName, email, role, fullName } = user
       res.cookie('token', token, {expiresIn:process.env.JWT_EXPIRES_IN})
       res.status(200).json({
         status:'successfully logged in',
         token,
         user:{
          _id,fristName, lastName, email, role, fullName
         }
       })
       } 
    }
    else{
       return res.status(401).json({
          message:'not valid email/password'
        })
      }
   } catch (error) {
    return res.status(400).json({
      message:'not valid email/password'
    })
   }
  
   } 
  

   exports.profile = async (req,res)=>{
    res.status(200).json({
      status:'user profile'
    })

   }

     

    exports.signout = async (req,res) =>{
      try{
          res.clearCookie('token')
          res.status(200).json({
            message:'logged out successfully...!'
          })
      }catch(error){
          res.status(500).json({
            message:'not signout...!'
          })
      }
  }
   
  

