
function checkParams(programOptions){
    if (!programOptions.shift) {
        console.error('Invalid option shift value: shift must be a number');
        process.exit(1);
      }
}

module.exports = {
    checkParams: checkParams
}