const Goal = require('../models/goalModel');

module.exports.createNewGoal = (req, res) => {
  
	const newGoal = new Goal(req.body);
	newGoal.save((err, goal) => {
		if (err) console.log(err);
		res.json(goal);
	});
};

module.exports.getAllGoals = async (req, res) => {
	try {
		const goals = await Goal.find({});
		res.send(goals);
	} catch (e) {
		res.status(500).send(e);
	}
};

module.exports.deleteGoal = async (req, res) => {
	try {
		const deleteGoal = await Goal.findByIdAndDelete(req.body.id);
		res.send(deleteGoal);
	} catch (error) {
		res.send(error);
	}
};

module.exports.updateGoal = async (req, res) => {
	try {
		const updatedGoal = await Goal.findByIdAndUpdate(req.body.id, req.body, { new: true });
		res.status(202).send(updatedGoal);
	} catch (error) {
		res.send(error);
	}
};
