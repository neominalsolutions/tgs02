var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const hbs = require('hbs');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// hbs paketinden default olarak partials ayarlı değil 
hbs.registerPartials(__dirname + '/views/partials/');

// layout için yaptığımız helper {{{block 'scripts'}}}
hbs.registerHelper('block', function (name) {
  var blocks  = this._blocks,
      content = blocks && blocks[name];

  return content ? content.join('\n') : null;
});

// express-hbs otomatik olarak geliyor
hbs.registerHelper('contentFor',function (name, options) {
  var blocks = this._blocks || (this._blocks = {}),
      block  = blocks[name] || (blocks[name] = []);

      //{{#contentFor 'scripts'}} <script></script> {{/contentFor}}

  block.push(options.fn(this));
})


app.use(logger('dev'));
// json üzerinden veri.
app.use(express.json());
// web uygulaması default form gönderim şekli.
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// bu dosya içindekiler sunucu üzerinden erişilebilir.
app.use(express.static(path.join(__dirname, 'public')));

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
  res.render('error');
});

module.exports = app;
