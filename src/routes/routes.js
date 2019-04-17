const express = require('express');
const router = express.Router();


const userController = require('../controllers/userController');
const goalController = require("../controllers/goalController");
const taskController = require("../controllers/taskController")

const jwt = require("jsonwebtoken")

//auth

router.post('/registration', userController.newUser);

router.post('/login', userController.logIn);

router.get('/logout', userController.logOut);

router.post('/goal', goalController.createNewGoal);

router.get('/goal', goalController.getAllGoals);

router.delete('/goal', goalController.deleteGoal);

router.patch('/goal', goalController.updateGoal);

router.patch('/task', taskController.updateTask);

router.post("/task", taskController.addTask);


const authCheck = (req, res, next)=>{

try {
  const guard =  jwt.verify(token, "wrong-secret");
  next()
} catch (err) {
  
}  
}


module.exports = router;
