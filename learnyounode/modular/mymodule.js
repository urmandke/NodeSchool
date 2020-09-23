const dir = require("console");
const fs = require('fs');
const path  = require("path");

module.exports = function (fileName, ext, callback){
    fs.readdir(fileName, function doneReading(err, fileList) {
        if (err) { return callback(err)}
        ext = "." + ext;
        fileListFiltered =  fileList.filter(file => (path.extname(file) === ext));
        return callback(null,fileListFiltered);
    });
};