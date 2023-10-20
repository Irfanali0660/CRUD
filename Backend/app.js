var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const env=require('dotenv')
const cors=require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const mongoose=require('mongoose')
env.config()
var app = express();
app.use(cors())

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('connected port 4000');
}).catch((error)=>{
    console.log(error);
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/', usersRouter);

module.exports = app;
