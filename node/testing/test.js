// TASK ONE
const name = require('./myModule.js');
console.log(name.myDateTime('Ghadah'))

// TASK TWO
const traingle = require('./traingle.js');
console.log(traingle.log())

const square = require('./square.js');
console.log(square.log())


// TASK THREE + TASK FOUR

// let http = require('http');
// let fs = require('fs');
// http.createServer(function (req, res) {
// //Open a file on the server and return its content:
// fs.writeFile('mynewfile3.txt', 'I am Ghadah Al-ghanim, 23 years old.', function (err) {
//     if (err) throw err;
//     console.log('Replaced!');
// });

// fs.readFile('mynewfile3.txt', function(err, data) {
// res.writeHead(200, {'Content-Type': 'text/html'});
// res.write(data);
// return res.end();
// });
// }).listen(3000);


let http = require('http');
let data = { a: 1, b:2, c:3 }
http.createServer(function (req, res) {
//Open a file on the server and return its content:
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
}).listen(3000);