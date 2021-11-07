const http = require('http');
// const inded = require('./index.html');
const fs = require('fs')
let js = {
    name:"yazeed",
    age:25,
    counry:'KSA'
}
const myJSON = JSON.stringify(js);

http.createServer(function (request,response) {
   fs.readFile('./index.html','utf-8',(err, data)=>{
    if(err) throw err;

    response.write(myJSON)
   
    // response.write(data);
    response.end();
})
}).listen(8000)