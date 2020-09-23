const fs = require('fs');
const process = require('process')

const path = process.argv[2];
const fileExtension = process.argv[3];

function FileReader (callback){
    fs.readdir(path, function doneReading(err, fileList) {
           callback(fileList);
    });
};

function filteredList (fileList){
    filteredList = fileList.filter(document => document.includes(fileExtension))
    for(let i = 0; i < filteredList.length-1; i++){
        console.log(filteredList[i]);
    }
}

FileReader(filteredList);

