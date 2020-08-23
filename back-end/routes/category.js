const express = require('express');

const {CreateCategory, GetAllCategory} = require('../controllers/categoryController');
const { protect, adminMiddleware } = require('../middleware');
const router = express.Router();

 router.route('/create/category').post(protect,adminMiddleware ,CreateCategory)

router.route('/category/getCategory').get(GetAllCategory)



// router 
// .route('/:id')
//   .get(authController.protect, blogController.GetSingleBlogs)
//   .patch(blogController.UpdateBlogs)
//   .delete(blogController.DeleteBlogs)

module.exports = router;