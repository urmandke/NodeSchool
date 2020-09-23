const http = require('http')
const process = require('process')

const address = process.argv[2];
let str = "";


http.get(address, function callback(response)
{
   while(!(response.on('end',function(){return}))){

    response.on('data',function callback2(data){
        console.log(data);        
        str += data;
        }
      )
    }
});
   

console.log(str.length);
console.log(str); 
