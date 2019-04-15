const User = require('../models/userModel');


module.exports.newUser = (req,res) => {
  const data = {
    email: req.body.email,
    password : req.body.password
  };
  
  const newUser = new User(data);
  
  newUser.save((err, doc)=>{
    if(err) {
      res.json({
        success: false,
        message: err.message
      })
    };
    res.json(doc);
  });
};

module.exports.logIn = async(req, res)=> {
  const email = req.body.email;
  const user = await User.findOne({email}).lean();
  console.log(user);


  User.findOne({email}, (err, user)=>{
    if(err){
      res.status(400).json({
        message: err.message
      });
    }
    res.json({
      user: {
        id: user._id,
        token: "tokenforloginjfjfjfjf"
      },
      success: true,
      message: "user successfully logined"
    });
  });
};

module.exports.logOut = (req, res)=>{
  res.json({
    message: "User successfuly loged out"
  });
};