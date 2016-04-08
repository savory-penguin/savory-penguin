/*
 * The purpose of this file is to define a ste of functions that will act as an interface between the application and mongodb.
 * The mongodb server is configured in db/config.js
*/

var User = require('./config').User;
var Promise = require('bluebird');

exports.db = {
  getUsers: function(name, email) {
    // Creates object to query database
    var dbQueryObject = {};
    if (name) {
      dbQueryObject.name = name;
    }
    if (email) {
      dbQueryObject.email = email;
    }

    return new Promise(function(resolve, reject) {
      User.find(dbQueryObject, function(error, users) {
        if (error) {
          console.log('ERROR calling getUsers function', error);
          reject(error);
        } else {
          resolve(users);
        }
      });
    });
  },

  addUser: function(name, email, funfact, profileimage) {
    var newDbEntry = {
      name: name,
      email: email,
      funfact: funfact,
      profileimage: profileimage
    };

    var  newUser = new User(newDbEntry);

    return new Promise(function(resolve, reject) {
      newUser.save(function(error, newUser) {
        if (error) {
          console.log('ERROR calling addUser function', error);
          reject(error);
        } else {
          resolve(newUser);
        }
      });
    });
  },

  getAll: function() {
    return new Promise(function(resolve, reject) {
      User.find(function(error, users) {
        if (error) {
          console.log('ERROR calling getAll function', error);
          reject(error);
        } else {
          resolve(users);
        }
      });
    });
  }
};