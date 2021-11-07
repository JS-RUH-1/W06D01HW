// Task 1
const studentName = require("./student");

studentName.student("Mohammed");
studentName.student("Khaled");
studentName.student("Ahmad");

// Task2
const triangle = require("./triangle");
const square = require("./square");

// Task3
let fs = require("fs");

fs.readFile("me.txt", "utf8", function (err, data) {
  console.log(data);
});

// Task4
let http = require("http");

const val = {
    id:5,
    name:"Kim"
}

http
  .createServer(function (req, res) {
    fs.readFile("file.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
    //   res.write(data);
      res.write(JSON.stringify(val));
      return res.end();
    });
  })
  .listen(8000);
