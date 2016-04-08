// Require depedencies needed for testing
jest.unmock('jquery');
var $ = require('jquery');

// Import server dependances jest.unmock('../server.js');
// var server = require('../server');
// Import database dependencies jest.unmock('../db/config.js');
// var db = require('../db/config');

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

describe('Basic database functionality', () => {
  it('Should be able to add documents to the users table', (done) => {

  });
  it('Should be able to delete documents from the users table', (done) => {

  });
});