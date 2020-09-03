const express = require('express');
const multer = require('multer')
const {CreateProduct, GetAllProduct} = require('../controllers/productController');
const { protect, adminMiddleware } = require('../middleware');
const shortid = require('shortid')
const path = require('path')

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalname)
    }
  })

const upload = multer({storage})

 router.route('/product/create').post(protect,adminMiddleware,upload.array('productPicture'), CreateProduct)

router.route('/product/all').get(GetAllProduct)



// router 
// .route('/:id')
//   .get(authController.protect, blogController.GetSingleBlogs)
//   .patch(blogController.UpdateBlogs)
//   .delete(blogController.DeleteBlogs)

module.exports = router;