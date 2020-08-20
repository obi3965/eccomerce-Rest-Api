const express = require('express');
const userController = require('../../controllers/userController')
const {signup, login} = require('../../controllers/admin/authController')

const { validateSignUpRequest, isRequestValidated, validateSignInRequest} = require('../../validator/auth');

const router = express.Router();

router.post('/admin/signup',validateSignUpRequest,isRequestValidated, signup)
router.post('/admin/login',validateSignInRequest ,isRequestValidated, login)
//router.post('/logout', authController.protect, authController.logout)


// router
//     .route('/')
//     .get(authController.protect,userController.getAllUsers)


// router
//     .route('/:id').get(authController.protect,userController.GetUserProfile)
//     .patch(authController.protect,userController.updateUser)
//     .delete(authController.protect,userController.deleteUser);






module.exports = router