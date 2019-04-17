const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
	taskTitle: {
    type: String,
    required: true
	},
	taskWeekRange: {
    type: Number,
    required: true
	},
	taskStart: {
		type: Date
	},
	taskFinish: {
		type: Date
	},
	taskIsActive: {
		type: Boolean,
		default: false
	},
	taskIsPriority: {
		type: Boolean,
		default: false
	}
});

module.exports = TaskSchema
