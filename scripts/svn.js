const EventEmitter = require('events');
const svnUltimate = require('node-svn-ultimate');
const nconf = require('nconf');
const { fork } = require('child_process');

class svn extends EventEmitter {
  constructor() {
    super();
  }

  _verify()
  {
    console.log('SVN');
  }

  _process(nconf) {
    const host = nconf.get('host');
    nconf.get('_checkoutdirectories').forEach((index) => {

      ((dir, home) => {
        svnUltimate.commands.checkout(host + dir, home, (err) => {
          let message = "Successful Checkout: " + dir;
          if (err) {
            message = err.message;
          }
          this.emit("processed", message);
        });
      })(index.dir, index.checkoutdir);

    });
  }

  _processThreads(nconf) {
    var inc = 0;
    const host = nconf.get('host');
    nconf.get('_checkoutdirectories').forEach((index) => {
      const checkout = fork('./scripts/process.js').send({_host: host, _index: index});
    });
  }
}

module.exports = new svn();
