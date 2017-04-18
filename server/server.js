var express = require('express');
var bodyParser = require('body-parser');
// var facebook = require('./config/facebook.js');
// var passport = require('passport');
// var FacebookStrategy = require('passport-facebook').Strategy;
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// TODO setup connection to database
// mongoose.connect('mongodb://localhost/penguin'); // TODO: update to server
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
// open connection to db
require('../db/config.js');

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
