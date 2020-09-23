const fs = require('fs');
const process = require('process');

const path = process.argv[2];

function FileReader (callback){
    fs.readFile(path, function doneReading(err, fileContents) {
           callback(fileContents);
    });
};

function logCount(buff){
    console.log(buff.toString().split('\n').length - 1);
}

FileReader(logCount);
