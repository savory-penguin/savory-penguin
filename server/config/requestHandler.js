// The below hard-coded examples are for testing purposes. Will be removed once Foursquare API is in place.
var restaurant = JSON.parse(fs.readFileSync('../sample_objects/restaurant.json'));
var matchedUser = JSON.parse(fs.readFileSync('../sample_objects/matched_user.json'));

module.exports = {
  getHome: function(req, res) {
    // TODO:
    // if user is aleady connected with FB
      res.send('You are home!');  
    // else
  },

  getSignin: function(req, res) { 
    // TODO:
    // if signin successful: check user in database
      // redirect to welcome page
    // else if user doesn't exist
      // sign user up: store user info in database
    res.send('signing in...'); 
  },

  getMatch: function(req, res) { 
    var responseJSON = {
      restaurant: restaurant,
      matchedUser = matchedUser
    };

    var stringifiedResponseJSON = JSON.stringify(responseJSON);
    res.send(responseJSON);
  },

};