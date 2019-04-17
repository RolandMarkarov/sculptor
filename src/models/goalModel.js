const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TasksSchema = require('./taskModel')

const GoalSchema = new Schema({
	goalTitle: {
    type: String,
    required: true
	},
	goalDescription: {
		type: String
	},
	goalNumber: {
		type: Number,
		default: 1
	},
	goalTask: [ TasksSchema ],
	goalColor: {
		type: String
	},
	goalEdit: {
		type: Boolean,
		default: false
	},
	goalCompleted: {
		type: Boolean,
		default: false
  },
  goalOwnerID: {
    type: String,
    required: true
  }
});

const Goal = mongoose.model('Goal', GoalSchema);
module.exports = Goal;
