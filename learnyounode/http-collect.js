const http = require('http')
const process = require('process')
const bl = require('bl')

const address1 = process.argv[2];
const address2 = process.argv[3];
const address3 = process.argv[4];

let str1 = "";
let str2 = "";
let str3 = "";

http.get(address1, function callback(response){
    response.pipe(bl(function callbackOrData(err,data){
        if (err){
            console.log(err);
        }
        else 
        {
            console.log(data.toString().length);
            console.log(data.toString());
        }
    }));
});
