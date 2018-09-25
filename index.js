const svnUltimate = require('node-svn-ultimate');
const fs = require('fs');
const nconf = require('nconf');
const path = require('path');
let svn = require('./scripts/svn');

var _filePath = path.resolve(__dirname, "config.json");

if(!fs.existsSync(_filePath))
{
  console.log("config does not exist!!");
  process.exit(-1);
}
else {
  nconf.file({
    file: _filePath,
    // Setting the separator as dot for nested objects
    logicalSeparator: '.'
  });

  svn = new svn();
  svn.process(nconf);

  svn.on("processed", function(data) {
    console.log(data);
  });
}
