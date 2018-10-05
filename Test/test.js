var assert = require('assert');
var should = require('chai').should();

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      //[1,2,3].indexOf(4).should.be.eql(-1);
      [1,2,3].indexOf(4).should.equal(-1);
    });
  });
});