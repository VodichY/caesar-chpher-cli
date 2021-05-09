
const fs = require('fs');
const path = require('path');

function chekIsFileExist(fileName, mode) {
    try {
      let fileNamen = path.resolve(process.cwd(), fileName);
        fs.accessSync(fileNamen, mode);
        return true;
    } catch (error) {
        console.error(error.message);
        return false;
    }
}

function checkParams(programOptions) {
  if (!programOptions.shift) {
    console.error('Invalid option shift value: shift must be a number');
    process.exit(1);
  }

  if (programOptions.input && !chekIsFileExist(programOptions.input, fs.constants.R_OK) ||
    programOptions.output && !chekIsFileExist(programOptions.output, fs.constants.W_OK)) {
    process.exit(1);
  }
}

module.exports = {
    chekIsFileExist: chekIsFileExist,
    checkParams: checkParams
}