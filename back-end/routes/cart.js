const express = require('express');

const { addItemToCart } = require('../controllers/cartController');
const { protect, userMiddleware } = require('../middleware');
const router = express.Router();

 router.route('/user/cart/addToCart').post(protect,userMiddleware ,addItemToCart)

// router.route('/category/getCategory').get(GetAllCategory)



// router 
// .route('/:id')
//   .get(authController.protect, blogController.GetSingleBlogs)
//   .patch(blogController.UpdateBlogs)
//   .delete(blogController.DeleteBlogs)

module.exports = router;