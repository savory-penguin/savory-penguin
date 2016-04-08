/*
 * This file (config.js) sets up the mongodb connection, defines the schema for all tables, and creates
 * a 'User' mongoose object while will be used in db/db.js
*/


// Dependencies
var mongoose = require('mongoose');

// DB connection/configuration
var dbUrl = 'mongodb://159.203.254.178:27017/penguin';
mongoose.connect(dbUrl);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Successfully connected to mongodb at', dbUrl);
});

// Database schema
var userSchema = mongoose.Schema({
  username: String,
  email: String,
  funfact: String,
  profileimage: String
});

exports.User = mongoose.model('User', userSchema);
