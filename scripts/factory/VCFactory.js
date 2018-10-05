const svn = require('../svn');
const git = require('../git');

const VCFactory = function(type) {
  if(type === "git") {
      return Object.create(git);
  }
  else if(type === "svn") {
      return Object.create(svn);
  }
}

module.exports = VCFactory;
