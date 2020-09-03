const express = require('express')
const multer = require('multer')
const path = require ('path')
const shortId = require('shortid')
const {
  CreateCategory,
  GetAllCategory,
} = require('../controllers/categoryController')
const { protect, adminMiddleware } = require('../middleware')

const router = express.Router()

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(path.dirname(__dirname), '/uploads/'))
//   },
//   filename: function (req, file, cb) {
//     cb(null, shortId.generate() + '-' + file.originalname)
//   },
// })

// const upload = multer({ storage })

const uploadFile = require('../middleware/upload') 
const upload = multer(uploadFile)
router
  .route('/create/category')
  .post(
    protect,
    adminMiddleware,
    upload.single('categoryImage'),
    CreateCategory,
  )

router.route('/category/getCategory').get(GetAllCategory)

// router
// .route('/:id')
//   .get(authController.protect, blogController.GetSingleBlogs)
//   .patch(blogController.UpdateBlogs)
//   .delete(blogController.DeleteBlogs)

module.exports = router
