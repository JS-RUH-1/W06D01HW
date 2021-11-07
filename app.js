const studnet = require("./student");
console.log(studnet.printStudent("Abdullah"));
console.log(studnet.printStudent("Mohammed"));

const triangle = require("./triangle");
triangle.printTrin();
const square = require("./square");
square.printSqua();

const fs = require("fs");
fs.readFile("Info.txt", "utf-8", function (err, data) {
  if (err) console.log(err);
  console.log(data);
});

let myJson = '{ "name":"Abdullah","age":23}';

const http = require("http");
http
  .createServer(function (req, res) {
    // fs.readFile("index.html", function (err, data) {
    //   res.writeHead(200, { "Content-Type": "text/html" });
    //   res.write(data);
    //   return res.end();
    // });

    // *************
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      "My name is" +
        JSON.parse(myJson).name +
        " and I'm " +
        JSON.parse(myJson).age +
        " years old.  " +
        myJson
    );

    return res.end();
  })
  .listen(8000);
