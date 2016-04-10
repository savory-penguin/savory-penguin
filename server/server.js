var express = require('express');
// var facebook = require('./config/facebook.js');
// var passport = require('passport');
// var FacebookStrategy = require('passport-facebook').Strategy;
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
// TODO setup connection to database

// passport middleware configuration
// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(new FacebookStrategy({
//     clientID: facebook.clientID,
//     clientSecret: facebook.clientSecret,
//     callbackURL: facebook.url,
//     profileFields: ['id', 'displayName', 'photos', 'email'], // get specific fields of user profile
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ facebookId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));

// configure server with routes
require('./config/routes.js')(app, express);

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
