const http = require('http')
const process = require('process')

const address = process.argv[2];
let str = "";


http.get(address, function callback(response){
   (response.end('data', qfunction({
        response.on('data', function (data){
        str += data;
        })
    })
})

console.log(str.length);
console.log(str); 
