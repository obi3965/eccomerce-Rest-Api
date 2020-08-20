// const Blogs = require('../models/Blogs')
// const path = require('path')


// exports.CreateBlogs = async (req, res, next) => {
//   try {
//     const blogs = new Blogs({
//       ...req.body,
//       owner:req.user._id
//     })
//     const savedBlogs = await blogs.save()

//     res.status(201).json({
//       status: 'blogs created',
//       savedBlogs: savedBlogs,
//     })
//   } catch (error) {
//     res.status(400).json({
//       status: 'it appeared a problem to create a blogs',
//       error,
//     })
//   }
 
// }

// exports.GetAllBlogs = async (req, res) => {
//   res.send('hello')
// }

// exports.UpdateBlogs = async (req, res, next) => {
//   let id = req.params.id
//   try {
//     let updatedBlogs = await Blogs.findByOne({_id:req.params.id,owner:req.user._id }, req.body, {
//       new: true,
//     })
//     res.status(200).send(updatedBlogs)
      
//   } catch (error) {
//     res.status(500).json({
//       status:'blog not been updated',
//       message: error,
//     })
//   }
// }

// exports.DeleteBlogs = async (req, res, next) => {
//   let id = req.params.id
//   try {
//     let DeleteBlogs = await Blogs.findByOne({ _id:req.params.id,owner:req.user._id })
//     res.status(200).send(DeleteBlogs)
     
      
   
//   } catch (error) {
//     res.status(500).json({
//       status: 'fail to delete a Blog',
//       error,
//     })
//   }
// }


exports.GetSingleBlogs = async(req,res)=>{
  res.send('single')
}

exports.UpdateBlogs = async(req,res)=>{
  res.send('single')
}

exports.DeleteBlogs = async(req,res)=>{
  res.send('single')
}
exports.CreateBlogs = async(req,res)=>{
  res.send('single')
}

exports.GetAllBlogs = async(req,res)=>{
  res.send('single')
}
