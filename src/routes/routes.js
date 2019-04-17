const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const goalController = require("../controllers/goalController");

//auth

router.post('/registration', userController.newUser);

router.post('/login', userController.logIn);

router.get('/logout', userController.logOut);

router.post('/goal', goalController.createNewGoal);

router.get('/goal', goalController.getAllGoals);

router.delete('/goal', goalController.deleteGoal);

router.patch('/goal', goalController.updateGoal)

module.exports = router;
