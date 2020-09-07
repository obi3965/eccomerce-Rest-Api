const User = require('../models/User')

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
    role:'user'
  })
   
    try{
      User.findOne({email: req.body.email})
       const users =  await user.save()
        res.status(201).json({
          message:'user created successfully',
          user:users,
          
        })
        // const errors = validationResult(req)
        // if(!errors){
        //   return next()
        // }
    }catch(error){
        res.status(400).json({
          message:'user already exist',
          error:error
        })
    }
 
}

exports.login = async (req, res) => {
  
   try {
   const user = await User.findOne({email:req.body.email})
    if(user){
      if(user.authenticate(req.body.password)){
        const token = JWT.sign({_id:user._id, role: user.role}, process.env.JWT_SECRET_KEY,{expiresIn:process.env.JWT_EXPIRES_IN})
       const {_id,fristName, lastName, email, role, fullName } = user
       res.status(200).json({
         message:'successfully logged in',
         token,
         user:{
          _id,fristName, lastName, email, role, fullName
         }
       })
       } 
    }
    else{
        res.status(401).json({
          status:'not valid email/password'
        })
      }
   } catch (error) {
    return res.status(500).json({
      message:'not valid email/password',
      error:error
    })
   }
  
   } 
  

  //  exports.profile = async (req,res)=>{
  //   res.status(200).json({
  //     status:'user profile'
  //   })

  //  }

     

  //   exports.logout = async (req,res) =>{
  //     try{
  //          req.user.tokens = req.user.tokens.filter(token => token.token !== req.token)
  //         req.user.tokens = []
  //         await req.user.save();
  //         res.status(200).send(req.user)
  //     }catch(e){
  //         res.status(500).send()
  //     }
  // }
   
  

