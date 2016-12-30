var app     = require('../../server/app'),
    request = require('supertest'),
    assert  = require('assert');

describe('Routes', function() {
  it('Not Found', function(done) {
    request(app)
      .get('/notfound')
      .expect(404)
      .expect('content-type', 'text/html; charset=utf-8', done);
  });

  it('GET /', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        assert.ok(res.body);
        done();
      })
  });
}); //describe
