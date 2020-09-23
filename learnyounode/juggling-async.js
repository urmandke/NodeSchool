const http = require('http')
const process = require('process')
const bl = require('bl')

const address1 = process.argv[2];
const address2 = process.argv[3];
const address3 = process.argv[4];

let str1 = "";
let str2 = "";
let str3 = "";

let count = 0;

http.get(address2, function callback(response){
    response.pipe(bl(function callbackOrData(err,data){
        if (err){
            console.log(err);
        }
        else 
        {
            str1 = data.toString();
            console.log(count);
            count++;
        }
    }));
});

http.get(address3, function callback(response){
    response.pipe(bl(function callbackOrData(err,data){
        if (err){
            console.log(err);
        }
        else 
        {
            str2 = data.toString();
            count++; 
            console.log(count);  
        }
    }));
});

http.get(address1, function callback(response){
    response.pipe(bl(function callbackOrData(err,data){
        if (err){
            console.log(err);
        }
        else 
        {
            str3 = data.toString();
            count++;
        }

    }));
});