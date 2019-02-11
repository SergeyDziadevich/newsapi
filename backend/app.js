const createError = require('http-errors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('./utils/logger');
const passport = require('./middlewares/passport');

const indexRouter = require('./routes/index');
const newsRouter = require('./routes/news');
const authRouter = require('./routes/auth');

const app = express();
mongoose.connect('mongodb://localhost:27017/news', { useNewUrlParser: true })
  .then(() => {
    logger.info(`Database connection successful`);

    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'pug');

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(require('body-parser').urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, 'public')));

    app.use(require('express-session')({ secret: 'secret', resave: true, saveUninitialized: true }));


    app.use(passport.initialize());
    app.use(passport.session());

    app.use('/', indexRouter);
    app.use('/news', newsRouter);
    app.use('/auth', authRouter);

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
  })
  .catch( err => {
    logger.error(`Database connection error`);

    app.use(function (req, res, next) {
      next(createError(500));
    });
  });



module.exports = app;
