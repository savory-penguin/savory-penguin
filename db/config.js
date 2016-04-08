/*
 * This file (config.js) sets up the mongodb connection, defines the schema for all tables, and creates
 * a 'User' mongoose object while will be used in db/db.js
*/


// Dependencies
var mongoose = require('mongoose');

// DB connection/configuration
mongoose.connect('mongodb://159.203.254.178:27017/penguin');
var dbConnection = mongoose.connection;
dbConnection.on('error', console.error.bind(console, 'connection error:'));
dbConnection.once('open', function() {
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
