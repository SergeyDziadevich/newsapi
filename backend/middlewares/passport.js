const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const Users = require('../models/users');

passport.use(new LocalStrategy(
  function (username, password, done) {
    Users.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.validatePassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

passport.use(new FacebookStrategy({
    clientID: '292901174706332',
    clientSecret: '7055cd2e46da6042554681c0a7b91015',
    callbackURL: '/auth/return'
  },
  function (accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }));

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

module.exports = passport;