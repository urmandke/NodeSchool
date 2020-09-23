const http = require('http')
const process = require('process')

const address = process.argv[2];
let str = "";


http.get(address, function callback(response){
  response.on('data',(data) => {
     str += data;
  })
  {
    response.on('end',() =>{
      console.log(str.length);
      console.log(str); 
    })
  }
})
   


