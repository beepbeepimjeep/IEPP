require('./model/index');
const urlSearchRouter = require('./routes/urlSearchRouter');
const fakeNewRouter = require('./routes/fakeNewRouter');
const chatRouter = require('./routes/chatRouter');
const articleRouter = require('./routes/articleRouter');
const cors = require('cors');
const bodyParser = require('body-parser');

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sqlRouter = require('./routes/sqlRouter');
var app = express();
//enables cors
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/url', urlSearchRouter);
app.use('/newCheck',fakeNewRouter);
app.use('/addSQL', sqlRouter);
app.use('/chat', chatRouter);
app.use('/getArticle', articleRouter);
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
});


app.listen(process.env.PORT||3080, () => {
  console.log('The library app is listening on port 3080!')
});

module.exports = app;
