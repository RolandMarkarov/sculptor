const express = require('express');
const app = express();

const logger = require('morgan');
const cors = require('cors');

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Sculptor:Sculptor_123@cluster0-g0dic.mongodb.net/test?retryWrites=true", {
  useNewUrlParser: true,
  useCreateIndex: true
}).then(
  ()=>{console.log("Mongo Connected ...");
},
  err=> console.log(err)
);

const router = require('./routes/routes')

app.use(logger('tiny'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.use('/', express.static('public'))
app.use('/api', router);

app.listen(3000, ()=>{
  console.log("Server started on 3000 port")
});

