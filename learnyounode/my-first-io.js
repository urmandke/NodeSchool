const fs = require('fs');
const process = require('process'); 

const path1 = process.argv[2];
const buff = fs.readFileSync(path1);
const str = buff.toString();
const stArray = str.split('\n');

console.log(stArray.length()-1);

function FileReader (callback){
    fs.readdir(path, function doneReading(err, fileList) {
           callback(fileList);
    });
};

function filterList (fileList){
    console.log();
}

FileReader(logCount);



