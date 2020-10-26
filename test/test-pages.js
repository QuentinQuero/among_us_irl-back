var expect  = require('chai').expect;
var request = require('request');

it('first test code error 200', function(done) {
    request('http://localhost:8080' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});
