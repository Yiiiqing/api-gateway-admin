var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var checkLogin = require('./middlewares/checkLogin')

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.engine('html',require('express-art-template'));
//option
app.set('views',{
  debug:process.env.NODE_ENV !== 'production'
});
app.set('views',path.join(__dirname,'views'))
app.set('view engine','.html')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//session
var sess = {
  secret : 'yiqing',
  saveUninitialized: false,//only when I set
  cookie: {}
}
app.use(session(sess));
//check login
app.use(checkLogin)
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(res.locals.error)
  res.render('error');
});

module.exports = app;
