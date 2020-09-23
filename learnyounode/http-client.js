const http = require('http')
const process = require('process')

const address = process.argv[2];

http.get(address, function callback(response){
    response.on('data', function (data){
        console.log(`${data}`)
    })
})