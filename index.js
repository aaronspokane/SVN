'use strict';
const program = require('commander');
const fs = require('fs');
const path = require('path');
let vc = require('./scripts/vc');

program
  .version('0.1.0')
  .description('Checkout using SVN or GIT');

program
  .command('svn [_path]')
  .description('Checkout with SVN - config path required')
  .action((_path = '') => {
    const _filePath = _path.length > 0 ? _path : path.resolve(__dirname, "config.json");
    vc = new vc();
    vc.CheckOut(_filePath);
  });

program
  .command('git [_path]')
  .description('Checkout with GIT - config path required')
  .action((_path = '') => {
    const _filePath = _path.length > 0 ? _path : path.resolve(__dirname, "config.json");
    vc = new vc();
    vc.CheckOut(_filePath);
  });

program.parse(process.argv);
