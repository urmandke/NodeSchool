const process = require('process');
const mymodule = require('./mymodule'); 


const fileName = process.argv[2];
const fileExtension = process.argv[3];

mymodule(fileName,fileExtension,callback);

function callback (err,fileListFiltered){
    if (err){console.error(err)}
    for(let i = 0; i < fileListFiltered.length; i++){
        console.log(fileListFiltered[i]);
    }
}
