var mongoose = require('mongoose');

var successfulMatchSchema = mongoose.Schema({
  firstMatchedUsername: String,
  secondMatchedUsername: String,
  restaurant: String,
  matchTime: { type: Date, default: Date.now } // When did the match happen
});

module.exports = mongoose.model('SuccessfulMatch', successfulMatchSchema);
