let http = require('http');
let fs = require('fs');
http.createServer(function (req, res) {
//Open a file on the server and return its content:
// fs.readFile('index.html', function(err, data) {
// res.writeHead(200, {'Content-Type': 'text/html'});
// res.write(data);
// return res.end();
// });
const obj = {name:"Hend"}

    res.write(JSON.stringify(obj));
    return res.end();
  
}).listen(8000);
