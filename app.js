/* eslint-disable no-console */
const os = require('os');
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexController = require('./controllers/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//   console.log({ headers: req.headers });

//   const MACAddress = os.networkInterfaces();
//   const secondKey = Object.keys(MACAddress)[1];
//   console.log({ MACAddress: MACAddress[secondKey][0].mac });
//   console.log({ MACAddress: JSON.stringify(MACAddress, null, 2) });

//   next();
// });

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexController);

// catch 404 and forward to error handler
// eslint-disable-next-line no-unused-vars
app.use((req, res, next, error) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  next();
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
