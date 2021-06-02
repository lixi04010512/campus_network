var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs=require('ejs');

var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var first_pageRouter = require('./routes/first_page');
var detailRouter=require('./routes/detail');
var teacherRouter=require('./routes/teacher');
var newsRouter =require('./routes/news');
var touchRouter=require('./routes/touch');
var talkRouter=require('./routes/talk');
var updateRouter=require('./routes/update');
var update_teachersRouter=require('./routes/update_teachers');
var update_detailRouter=require('./routes/update_detail');
var update_talkRouter=require('./routes/update_talk');
var add_contentRouter=require('./routes/add_content');
var add_commentRouter=require('./routes/add_comment');

var register1Router=require('./routes/register1');
var login1Router=require('./routes/login1');
var MfirstRouter=require('./routes/Mfirst');
var MnoticeRouter=require('./routes/Mnotice');
var MtouchRouter=require('./routes/Mtouch');
var MteacherRouter=require('./routes/Mteacher');
var MdetailRouter=require('./routes/Mdetail');
var MtalkRouter=require('./routes/Mtalk');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html',ejs.__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/login',loginRouter);
app.use('/register',registerRouter);
app.use('/first_page', first_pageRouter);
app.use('/detail',detailRouter);
app.use('/teacher',teacherRouter);
app.use('/news',newsRouter);
app.use('/touch',touchRouter);
app.use('/talk',talkRouter);
app.use('/update',updateRouter);
app.use('/update_teachers',update_teachersRouter);
app.use('/update_detail',update_detailRouter);
app.use('/update_talk',update_talkRouter);
app.use('/add_content',add_contentRouter);
app.use('/add_comment',add_commentRouter);

app.use('/login1',login1Router);
app.use('/register1',register1Router);
app.use('/Mfirst',MfirstRouter);
app.use('/Mnotice',MnoticeRouter);
app.use('/Mtouch',MtouchRouter);
app.use('/Mteacher',MteacherRouter);
app.use('/Mdetail',MdetailRouter);
app.use('/Mtalk',MtalkRouter);


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
  res.render('error');
  console.log(err);
});

module.exports = app;
