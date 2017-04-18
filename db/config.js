/*
 * This file (config.js) sets up the mongodb connection, defines the schema for all tables, and creates
 * a 'User' mongoose object while will be used in db/db.js
*/


// Dependencies
var mongoose = require('mongoose');

// DB connection/configuration
mongoose.connect('mongodb://127.0.0.1:27017/penguin');
var dbConnection = mongoose.connection;
dbConnection.on('error', console.error.bind(console, 'connection error:'));
dbConnection.once('open', function() {
  console.log('Successfully connected to mongodb at mongodb://127.0.0.1:27017/penguin');
});

// Database schema
// var userSchema = mongoose.Schema({
//   username: String,
//   firstName: String,
//   email: String,
//   password: String,
//   funFact: String,
//   profileImage: String,
//   matches: { type: Number, default: 0 },
//   averageRating: { type: Number, default: 0 }
// });

// var matchRequestSchema = mongoose.Schema({
//   username: String,
//   latitude: Number,
//   longitude: Number,
//   timeStamp: { type: Date, default: Date.now }, // When did this user start looking for a match
//   isActive: { type: Boolean, default: true }
// });

// var successfulMatchSchema = mongoose.Schema({
//   firstMatchedUsername: String,
//   secondMatchedUsername: String,
//   restaurant: String,
//   matchTime: { type: Date, default: Date.now } // When did the match happen
// });

// exports.User = mongoose.model('User', userSchema);
// exports.MatchRequest = mongoose.model('MatchRequest', matchRequestSchema);
// exports.SuccessfulMatch = mongoose.model('SuccessfulMatch', successfulMatchSchema);
