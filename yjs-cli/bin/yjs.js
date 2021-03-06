#!/usr/bin/env node
const program = require('commander')
program.version(require('../package.json').version)

program
  .command('init <name>')
  .description('init project  ')
  .action(require('../lib/init.js'))

program
  .command('refresh <name>')
  .description('refresh routers an menu')
  .action(require('../lib/refresh.js'))

  program.parse(process.argv)