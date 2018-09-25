const EventEmitter = require('events');

class svn extends EventEmitter {
  constructor()
  {
    super();
  }

  process(nconf)
  {
    nconf.get('_checkoutdirectories').forEach((index) => {
        this.emit("processed", index.dir);
    });

    /*const startTime = new Date();
    svnUltimate.commands.checkout('http://fabuildsrv2:8080/svn/fasuite/trunk/InfoCenterBase/Scheduling/FATaskCreator/FATaskCreator','D:\Repo',(err) => {
      const endTime = new Date();
      const completeTime = endTime - startTime;
      console.log(`Checkout complete in ${completeTime} ms`);
    });
    */
  }
}

module.exports = svn;
