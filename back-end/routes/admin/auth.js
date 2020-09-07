const express = require('express');
const userController = require('../../controllers/userController')
const {signup, signin, signout} = require('../../controllers/admin/authController')
const { protect } = require('../../middleware/index')
const { validateSignUpRequest, isRequestValidated, validateSignInRequest} = require('../../validator/auth');

const router = express.Router();

router.post('/admin/signup',validateSignUpRequest,isRequestValidated, signup)
router.post('/admin/signin',validateSignInRequest ,isRequestValidated, signin)
router.post('/admin/signout',protect, signout)


// router
//     .route('/')
//     .get(authController.protect,userController.getAllUsers)


// router
//     .route('/:id').get(authController.protect,userController.GetUserProfile)
//     .patch(authController.protect,userController.updateUser)
//     .delete(authController.protect,userController.deleteUser);






module.exports = router