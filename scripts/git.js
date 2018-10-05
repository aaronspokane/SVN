const EventEmitter = require("events");
const nconf = require('nconf');

class git extends EventEmitter {
  constructor() {
    super();
  }

  _verify()
  {
    console.log('GIT');
  }

  _process(nconf) {

  }
}

module.exports = new git();
