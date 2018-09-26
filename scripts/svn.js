const EventEmitter = require('events');

class svn extends EventEmitter {
  constructor()
  {
    super();
  }

  process(nconf)
  {
    const startTime = performance.now();
    nconf.get('_checkoutdirectories').forEach((index) => {
      /*
      svnUltimate.commands.checkout('http://fabuildsrv2:8080/svn/fasuite/trunk/InfoCenterBase/Scheduling/FATaskCreator/FATaskCreator','D:\Repo',(err) => {
      var end = window.performance.now();
      var dur = end - start;
      console.log(`Checkout complete in ${dur} ms`);
      });
      */
        this.emit("processed", index.dir);
    });
  }
}

module.exports = svn;
