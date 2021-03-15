var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const landingRouter  = require('./routes/landing')
const bodyParser = require('body-parser')
const loginRouter  = require("./routes/login")
const structureDb = require('./routes/createTable')
const dashboardRouter = require('./routes/dashboard')
const signupRouter=require('./routes/signup');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(logger('dev'));
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
//* This line is necessary when sending data through content-type: application/json 
app.use(express.json());
app.use(express.static(path.join(__dirname + '/../public')));
app.use(express.static('public'));

app.use('/',landingRouter)
app.use('/login',loginRouter);
app.use('/form',structureDb);
app.use('/dashboard',dashboardRouter);
app.use("/signup",signupRouter);
app.use(function(req, res, next) {
  next(createError(404));
});
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000,(req,res)=>{
  console.log("Server is running");
})

module.exports = app;
