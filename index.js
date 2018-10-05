'use strict';
const program = require('commander');
const path = require('path');
let vc = require('./scripts/vc');

program
  .version('0.1.0')
  .description('Checkout using SVN or GIT');

program
  .command('svn chekout [_path]')
  .description('Checkout with SVN - config path required')
  .action((_path = '') => {
    const _filePath = _path.length > 0 ? _path : path.resolve(__dirname, "config.json");
    vc = new vc();
    vc.CheckOut(_filePath, "svn");
  });

program
  .command('git chekout [_path]')
  .description('Checkout with GIT - config path required')
  .action((_path = '') => {
    const _filePath = _path.length > 0 ? _path : path.resolve(__dirname, "config.json");
    vc = new vc();
    vc.CheckOut(_filePath, "git");
  });

program.parse(process.argv);
