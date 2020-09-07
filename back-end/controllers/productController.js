const Product = require('../models/product')
const slugify = require('slugify')




exports.CreateProduct = async (req,res)=>{


  const {name, price, quantity,offer, description, category, createdBy } = req.body
  
  let productPictures = []
  if(req.files.length > 0){
    productPictures = req.files.map(file =>{
          return { img: file.filename}
      })
  }
  const product =  new Product({
      name:name,
      slug:slugify(name),
      price,
      quantity,
      offer,
      description,
      productPictures,
      category,
      createdBy: req.user._id
  })
  try {
      const products = await product.save()
      res.status(201).json({
          success:'product created',
          products
      })
  } catch (error) {
      return res.status(400).json({
          status:'product not created',
          error
      })
  }
}

exports.GetAllProduct = async (req,res)=>{

   
   try {
       const products = await Product.find()
       res.status(200).json({
        message:'product found',
        products
    })
   } catch (error) {
       res.status(404).json({
           status:"product not found",
           error
       })
   }
    
}