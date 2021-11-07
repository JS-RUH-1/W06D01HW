let name1 = require("./student")
console.log(name1.num("marah"))

let triangle = require("./triangle")
let square = require("./square")

let http = require('http');
let fs = require('fs');


//     fs.writeFile('file.txt', `
//     <h1> marah </h1>

//     `, function(err) {
//      if (err) throw err
//      console.log('created')
//     });
 
//     fs.readFile('file.txt', function(err, data) {
//      res.writeHead(200, {'Content-Type': 'text/html'});
//      res.write(data);
//      return res.end();
//    });


let info = { name: 'marah', age:2 }
http.createServer(function (req, res) {
//Open a file on the server and return its content:
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(info));
}).listen(3000);

