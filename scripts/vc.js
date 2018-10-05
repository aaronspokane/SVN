const fs = require('fs');
const nconf = require('nconf');
const factory = require('./factory/VCFactory');

class VersionControl {
  constructor() { }

  CheckOut(path, type) {
       if (!fs.existsSync(path)) {
        console.log("config does not exist!!");
        process.exit(-1);
      } else {
        nconf.file({
          file: path,
          // Setting the separator as dot for nested objects
          logicalSeparator: '.'
        });

        var _vc = factory(type);

        _vc.on("processed", function(data) {
          console.log(data);
        });

        process.on('exit', function() {
          console.log("Finished in " + process.hrtime(startTime));
        });

        const startTime = process.hrtime();
        //_vc._process(nconf);
      }
    }
}

module.exports = VersionControl;
