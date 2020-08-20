const User = require('../models/User')

exports.GetUserProfile = async(req,res,next)=>{
const id = req.params.id
  try {
    const userProfile = await User.findById({_id: id})
    if(!userProfile){
      return res.status(404).json({
        status:'user profile not found'
      })
    }
    res.status(200).json({
      status:'userprofile is here',
      userProfile:userProfile
    })
   // res.send('profile')
  } catch (error) {
    res.status(400).json({
      status:'bad request for userprofile',
      message:error
    })
  }
 
}

exports.getAllUsers = async(req,res)=>{
 try {
    const user = await User.findOne()
    res.status(200).json({
      status:'all users found',
      user:user
    })
 } catch (error) {
   res.status(404).json({
     status:'all users not found',
     message:error
   })
 }
}

exports.updateUser = async(req,res)=>{
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body,{
   new:true,
   runValidators:true
 })
 if(!user)
 return res.status(404).json({
   status:'updated user not found'
 })
 res.status(200).json({
   status:'user been updated',
   user:user
 })
  } catch (error) {
    res.status(500).json({
      status:'internal server error to update user',
      message:error
    })
  }
 
}

exports.deleteUser = async(req,res)=>{
  try {
    const user = await User.findByIdAndDelete(req.params.id)
 if(!user)
 return res.status(404).json({
   status:'deleted user not found'
 })
 res.status(200).json({
   status:'user been deleted',
   user:user
 })
  } catch (error) {
    res.status(500).json({
      status:'internal server error to delete user',
      message:error
    })
  }
 
}