// Require depedencies needed for testing
jest.unmock('jquery');
var $ = require('jquery');

jest.unmock('bluebird');
var Promise = require('bluebird');

jest.unmock('../db/db.js');
var db = require('../db/db.js');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

describe('Basic server functionality', () => {
  it('Should accept and respond to GET requests at the /match endpoint', (done) => {
    $.get('http://159.203.254.178:8000/match', function(data, status) {
      expect(status).toEqual('success');
      done();
    });
  });
  it('Should accept and respond to GET requests at the /signin endpoint', (done) => {
    $.get('http://159.203.254.178:8000/signin', function(data, status) {
      expect(status).toEqual('success');
      done();
    });
  });
  it('Should not accept and respond to GET requests at the non-existant endpoints', (done) => {
    $.get('http://159.203.254.178:8000/asdfsdf', function(data, status) {
      expect(status).toEqual('error');
      done();
    })
    .fail(function(data, status) {
      expect(status).toEqual('error');
      done();
    });
  });
});

// describe('Basic database functionality', () => {
//   xit('Should be able to add documents to the users table', (done) => {
//     db.addUser("rahim", "test@test.com", "likes candy", "somepath.gif")
//       .then(function(newUser) {
//         db.getUsers('rahim')
//           .then(function(users) {
//             expect(users.length).toEqual(1);
//             done();
//           })
//           .catch(function(error) {
//             console.log('Error finding test user "rahim" in database. Failed during getUser step.', error);
//             expect(false).toEqual(true);
//           });
//       })
//       .catch(function(error) {
//         console.log('Error finding test user "rahim" in database. Failed during addUser step.', error);
//         expect(false).toEqual(true);
//       });
//   });
//   xit('Should be able to delete documents from the users table', (done) => {

//   });
// });