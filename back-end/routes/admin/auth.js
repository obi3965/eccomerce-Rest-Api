const express = require('express');
const userController = require('../../controllers/userController')
const authController = require('../../controllers/admin/authController')


const router = express.Router();

router.post('/signup',authController.signup)
router.post('/login', authController.login)
router.post('/logout', authController.protect, authController.logout)
router.post('/profile', authController.protect, authController.profile)

router
    .route('/')
    .get(authController.protect,userController.getAllUsers)


router
    .route('/:id').get(authController.protect,userController.GetUserProfile)
    .patch(authController.protect,userController.updateUser)
    .delete(authController.protect,userController.deleteUser);






module.exports = router