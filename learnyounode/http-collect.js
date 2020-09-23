const http = require('http')
const process = require('process')
const bl = require('bl')

const address = process.argv[2];

let str = "";

http.get(address, function callback(response){
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

    
})