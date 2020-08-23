const Category = require('../models/category')
const slugify = require('slugify')

 function createCategories(categories, parentId = null){
  const categoryList = []
  let category;
  if(parentId == null){
  category = categories.filter(cat => cat.parentId == undefined)
  }else{
      category = categories.filter(cat => cat.parentId == parentId)
  }
  for(let cat of category){
      categoryList.push({
          _id:cat._id,
          name:cat.name,
          slug:cat.slug,
          children: createCategories(categories,cat._id) 
      })
  }
  return categoryList;
}

exports.CreateCategory = async (req,res)=>{
  const categoryObj ={
      name: req.body.name,
      slug:slugify(req.body.name)
  }
  try {
      if(req.body.parentId){
          categoryObj.parentId = req.body.parentId
      }
      const cat =  new Category(categoryObj)
     const category = await cat.save()
     res.status(201).json({
         status:"category created",
         category:category
     })
  } catch (error) {
      res.status(400).json({
          status:'category not created',
          message:error
      })
  }
}

exports.GetAllCategory = async (req,res)=>{
    
    try {
        const categories = await Category.find()
        if(categories){
            const categoryList = await createCategories(categories)
            res.status(200).json({
                success:"all category is found",
                categoryList:categoryList
            })
        }
        
    } catch (error) {
        res.status(404).json({
            status:'category not found',
            message:error
        })
    }
}