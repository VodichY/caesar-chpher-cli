const yargs = require('yargs')
const rwFile = require('./js/rwFile');
const checkConditions = require('./js/checkConditions');

programOptions = yargs
  .option('shift', {
    alias: 's',
    demandOption: true,
    describe: 'a shift',
    type: 'number'
  })
  .option('action', {
    alias: 'a',
    demandOption: true,
    describe: 'an action encode/decode',
    type: 'string',
    choices: ['encode','decode']
  })
  .option('input', {
    alias: 'i',
    demandOption: false,
    describe: 'an input file',
    type: 'string'
  })
  .option('output', {
    alias: 'o',
    demandOption: false,
    describe: 'an output file',
    type: 'string'
  }) 
  .option('version', {
    alias: 'v',
    hidden: true
  })
  .option('help', {
    alias: 'h',
    hidden: true
  })
  .showHelpOnFail(false, 'Specify --help for available options')
  .argv;

  rwFile.setOptions(programOptions);
  checkConditions.checkParams(programOptions);
  rwFile.readWriteData();

  

