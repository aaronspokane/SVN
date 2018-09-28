'use strict';
const program = require('commander');
const fs = require('fs');
const nconf = require('nconf');
const path = require('path');
let svn = require('./scripts/svn');
//let _filePath = path.resolve(__dirname, "config.json");

program
  .version('0.1.0')
  .description('Checkout using SVN or GIT');

program
  .command('svn <path>')
  .description('Checkout with SVN - config path required')
  .action((path) => CheckOut(path));

program
  .command('git <path>')
  .description('Checkout with GIT - config path required')
  .action((path) => console.log(`Checking out with GIT config path: ${path}`));

program.parse(process.argv);

function CheckOut(path) {
   if (!fs.existsSync(path)) {
    console.log("config does not exist!!");
    process.exit(-1);
  } else {
    console.log("config exists!!");
  /*  nconf.file({
      file: _filePath,
      // Setting the separator as dot for nested objects
      logicalSeparator: '.'
    });

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
