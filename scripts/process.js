const svnUltimate = require('node-svn-ultimate');

process.on('message', obj => {
  Checkout(obj);
});

function Checkout(obj) {  
  svnUltimate.commands.checkout(obj._host + obj._index.dir, obj._index.checkoutdir, (err) => {
    if (err) {
     console.log(err.message);
    }
    process.exit(-1);
  });
}
