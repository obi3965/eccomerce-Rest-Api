const express = require('express');
const blogController  = require('../controllers/blogController');
const authController = require('../controllers/admin/authController')

const router = express.Router();



router
.route('/').get(authController.protect, blogController.GetAllBlogs)
.post(authController.protect,blogController.CreateBlogs)


router 
.route('/:id')
  .get(authController.protect, blogController.GetSingleBlogs)
  .patch(blogController.UpdateBlogs)
  .delete(blogController.DeleteBlogs)

module.exports = router;