/*
 * The API keys below will need to be added at time of deploy in order for the app to connect with the Foursquare API.
 * Once API keys have been added, this code will be functional.
 */

var request = require('request');
var keys = {};
try {
  keys = require('./foursquarekeys.js');
}
catch(e) {
  console.log('./foursquarekeys.js does not exist', e);
}

exports.client_id = keys.client_id || '';
exports.client_secret = keys.client_secret || '';

exports.getRestaurant = function(longitude, latitude, lunchOrCoffee) {
  var maxResults = 50; // max # of results to return
  var searchRadius = 500; // # of meters from the specified longitude/latitude to search
  var categoryId = lunchOrCoffee === 'lunch' ? '4d4b7105d754a06374d81259' : '4bf58dd8d48988d1e0931735'

  /*
   * The foursquare API provides a variety of options that can be passed in as part of the query string ('qs'):
   *   - client_id (required)
   *   - client_secret (required)
   *   - v is the version of the API that you would like to access (required)
   *   - ll is the longitude, latitude
   *   - limit is the # of results Foursquare should return
   *   - Category ID is the categories that you would like Foursquare to search. We have included the 'food' category below. A full list of categories 
   *     can be found here: https://developer.foursquare.com/categorytree
   *   - Radius is the search radius in meters. By default, Foursquare will search the entire city.
   */
  var requestOptions = {
    method: 'GET',
    uri: 'https://api.foursquare.com/v2/venues/search',
    qs: {
      client_id: exports.client_id,
      client_secret: exports.client_secret,
      v: 20160405,
      ll: latitude + ', ' + longitude,
      limit: maxResults,
      categoryId: categoryId,
      radius: searchRadius
    }
  };

  console.log('Getting restaurant with following request options', requestOptions);

  return new Promise(function(resolve, reject) {
    request(requestOptions, function(error, response, body) {
      if (error) {
        console.log('There was an error making a request to the Foursquare API', error);
        reject(error);
      } else {
        var parsedBody = JSON.parse(body);
        var restaurantList = parsedBody.response.venues;
        // Picking a random restaurant from the list returned by Foursquare
        var randomRestaurantIndex = Math.floor(Math.random() * restaurantList.length);
        // JSON object that will be sent back to the client
        resolve(restaurantList[randomRestaurantIndex]);
      }
    });
  });

};