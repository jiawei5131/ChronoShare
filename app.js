var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var db = require('./config/db');

var routes = require('./routes/index');
var users = require('./routes/users');
var delivers = require('./routes/delivers');
var delivers_select = require('./routes/delivers_select');
var discussion = require('./routes/discussion');
var receivers = require('./routes/receivers');
var about = require('./routes/about');
var contact = require('./routes/contact');
var dashboard = require('./routes/dashboard');
var adminview = require('./routes/adminview');
var ordersplaced = require('./routes/ordersplaced');
var orderdetails = require('./routes/orderdetails');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(session({secret: 'alskjdfoi2j3oj231312nsfkasj',
                 saveUninitialized: true,
                 resave: true,
                 cookie: {maxAge: 15 * 60 * 1000} // cookie age 15 mins
                }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/users/delivers', delivers);
app.use('/users/receivers', receivers);
app.use('/users/dashboard', dashboard);
app.use('/users/ordersplaced', ordersplaced);
app.use('/users/delivers_select', delivers_select);
app.use('/users/discussion',discussion);
app.use('/users/orderdetails', orderdetails);
app.use('/about', about);
app.use('/contact', contact);
app.use('/adminview', adminview);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
