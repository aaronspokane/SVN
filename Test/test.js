const expect = require('chai').expect;
let vc = require('../scripts/vc');
const path = require('path');
const factory = require('../scripts/factory/VCFactory');
let svn = require('../scripts/svn');

describe('vc', function() {
  describe('CheckOut', function() {
    let _filePath;

    beforeEach(() => {
       vc = new vc();
       _filePath = path.resolve(__dirname, "../config.json");
    });

    it('should be a function', function(){
      expect(vc.CheckOut).to.be.a('function');
    });
  });
});

describe('VCFactory', () => {
  it('should return svn object', () => {
      const obj = factory('git');
      expect(obj).to.be.instanceof(svn);
      //expect(obj instanceof svn).to.be.true;
  });
});
