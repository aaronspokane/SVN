const svnUltimate = require('node-svn-ultimate');
const fs = require('fs');
const nconf = require('nconf');
const path = require('path');

var _filePath = path.resolve(__dirname, "config.json");

if(!fs.statSync(_filePath))
{
  console.log("config does not exist!!");
  return;
}

nconf.argv()
  .env()
  .file({file: "/config.json"});

/*const startTime = new Date();
svnUltimate.commands.checkout('http://fabuildsrv2:8080/svn/fasuite/trunk/InfoCenterBase/Scheduling/FATaskCreator/FATaskCreator','D:\Repo',(err) => {
  const endTime = new Date();
  const completeTime = endTime - startTime;
  console.log(`Checkout complete in ${completeTime} ms`);
});
*/
