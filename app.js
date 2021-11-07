'use strict'
let print = require('./student');
const { areaTriangle } = require('./triangle');
const {areaSquar} =require('./square');

let fs = require('fs');
let http = require('http');
let fileJSON =require('./info.json');

//const { throws } = require('assert');
//Task #1
console.log(print.printNames("Maha"));
console.log(print.printNames("Mohammed"));
console.log(print.printNames("Noura"));

//Task #2
console.log(areaTriangle());
console.log(areaSquar());

//Task #3
// fs.readFile('TestFile.txt', function (err, data) {
//     if (err) throw err;
// console.log(data); });

//Task #4.1
// http.createServer(function (req, res) {
//     //Open a file on the server and return its content:
//     fs.readFile('./index.html', function(err, data) {
//         if(err) throw err
//       res.write(data);
//       return res.end();
//     });
// }).listen(8000);

//Task #4.2
http.createServer(function (req, res) {
    //Open a file on the server and return its content:
    
     let info = JSON.stringify(fileJSON);
      res.write(info);
      return res.end();
  
}).listen(8080);
