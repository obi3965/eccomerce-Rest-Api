const express = require('express');
const multer = require('multer')
const {CreateProduct, GetAllProduct} = require('../controllers/productController');
const { protect, adminMiddleware } = require('../middleware');


const router = express.Router();

const uploadFile = require('../middleware/upload') 
const upload = multer(uploadFile)

 router.route('/product/create').post(protect,adminMiddleware,upload.array('productPicture'), CreateProduct)

router.route('/product/all').get(GetAllProduct)



// router 
// .route('/:id')
//   .get(authController.protect, blogController.GetSingleBlogs)
//   .patch(blogController.UpdateBlogs)
//   .delete(blogController.DeleteBlogs)

module.exports = router;