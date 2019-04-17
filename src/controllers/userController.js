const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const token = jwt.sign(
	{
		data: 'foobar'
	},
	'secret',
	{ expiresIn: 100 }
);
console.log(token);
module.exports.newUser = (req, res) => {
	const data = {
		email: req.body.email,
		password: req.body.password
	};

	const newUser = new User(data);

	newUser.save((err, doc) => {
		if (err) {
			res.json({
				success: false,
				message: err.message
			});
		}
		doc
			? res.status(201).json({
					success: true,
					message: 'User Created successfully'
				})
			: res.status(204).json({
					success: false,
					message: 'Please fill all fields'
				});
	});
};

module.exports.logIn = async (req, res) => {
  const email = req.body.email;
	const user = await User.findOne({ email }).lean();
    const token = jwt.sign(user, "secret",{
      expiresIn: "1h"})

	User.findOne({ email }, (err, user) => {
		if (err) {
			res.status(400).json({
				message: err.message,
			});
		}
		res.json({
			user: {
				id: user._id,
				token,
			},
			success: true,
			message: 'user successfully logined'
		});
	});
};

module.exports.logOut = (req, res) => {
	res.json({
		message: 'User successfuly loged out'
	});
};
