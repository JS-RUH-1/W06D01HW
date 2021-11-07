/* Print Student Name */
const students = require ('./students');
students.printStudentName("Basel");

/* Print Square Dimensions */
const square = require ('./square');
square.printSquare();

/* Print Triangle Dimensions */

const triangle = require ('./triangle');
triangle.printTriangle();

/* Read text file */
const fs = require ('fs');
fs.readFile('about.txt', {encoding: 'utf8'}, (err, data) => {
    err ? console.log ( err ) : console.log(data);
});

/* Create web srver */
const http = require("http");
const server = http.createServer((req, res) => {
    fs.readFile("./index.html",(err, contents) =>
        {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            err
            ? res.end(`<h1>Error ${err}</h1>`)
            : res.end(contents);
        }
    )
});

server.listen(8000, "localhost", () => {
    console.log(`Server is running on http://localhost:8000`);
});