let svn = require('svn');
let svn = require('git');
const nconf = require('nconf');

class VersionControl {
  constructor() {

    function CheckOut(path) {
       if (!fs.existsSync(path)) {
        console.log("config does not exist!!");
        process.exit(-1);
      } else {
        nconf.file({
          file: path,
          // Setting the separator as dot for nested objects
          logicalSeparator: '.'
        });

        /*
        svn = new svn();

        svn.on("processed", function(data) {
          console.log(data);
        });

        process.on('exit', function() {
          console.log("Finished in " + process.hrtime(startTime));
        });

        const startTime = process.hrtime();
        svn._process(nconf); */
      }
    }
  }
}

module.exports = VersionControl;
