const svnUltimate = require('node-svn-ultimate');
const fs = require('fs');
const nconf = require('nconf');
const path = require('path');
let svn = require('./scripts/svn');
const numCPUs = require('os').cpus().length;

var _filePath = path.resolve(__dirname, "config.json");

//www.acuriousanimal.com/2017/08/12/understanding-the-nodejs-cluster-module.html


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

  svn.on("processed", function(data) {
    console.log(data);
  });

  svn.process(nconf);
}
