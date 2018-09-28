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
  .command('svn [_path]')
  .description('Checkout with SVN - config path required')
  .action((_path = '') => {
    const _filePath = _path.length > 0 ? _path : path.resolve(__dirname, "config.json");
    CheckOut(_filePath);
  });

program
  .command('git [_path]')
  .description('Checkout with GIT - config path required')
  .action((_path = '') => {
    const _filePath = _path.length > 0 ? _path : path.resolve(__dirname, "config.json");
    CheckOut(_filePath);
  });

program.parse(process.argv);

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
