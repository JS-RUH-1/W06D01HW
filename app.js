const student = require('./student');

const fs = require("fs");

student.names("Noura");

/////////

const triangles = require('./triangle');

triangles.printTringle();

////////

const squares = require('./square');

squares.printSquare();

////////

fs.readFile('noura.txt',{encoding:"utf-8"}, (err,data)=>{
    err ? console.log(err) : console.log(data);
});

////////

const http = require("http");
const server = http.createServer((req,res)=>{
    fs.readFile("./index.html",(err,contents)=>{

        res.setHeader("Content-Type","text/html");
        res.writeHead(200);

        err ? res.end('<h1>Error</h1>') : res.end (contents);
    })
}
);

server.listen(8000);