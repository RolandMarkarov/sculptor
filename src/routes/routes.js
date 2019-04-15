const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

//auth

router.post('/registration', userController.newUser);

router.post('/login', userController.logIn);

router.get('/logout', userController.logOut);

module.exports = router;
