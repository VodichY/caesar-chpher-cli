const fs = require('fs');
const encryption = require('./encryption');
const path = require('path');
const stream = require('stream');
let programOptions;

function setOptions(options) {
    programOptions = options;
}

class transformData extends stream.Transform {
    _transform(data, encoding, callback) {
        data = encryption.codingCaesarCipher(programOptions.shift, programOptions.action, data);
        callback(null, data);
    }
}

async function readWriteData() {
    const transform = new transformData();
    let readableStream;
    let writeableStream;

    if (programOptions.input) {
        const inFilePath = path.resolve(process.cwd(), programOptions.input);
        readableStream = fs.createReadStream(inFilePath, 'utf8');
    } else {
        readableStream = process.stdin;
    }

    if (programOptions.output) {
        const outputFilePath = path.resolve(process.cwd(), programOptions.output);
        writeableStream = fs.createWriteStream(outputFilePath, {
            encoding: 'utf8',
            flags: 'a+'
        });
    } else {
        writeableStream = process.stdout;
    }

    readableStream.pipe(transform).pipe(writeableStream);
}

module.exports = {
    readWriteData: readWriteData,
    setOptions: setOptions
}