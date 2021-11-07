const http = require("http");
const student = require("./student");

let fs = require("fs");

fs.writeFile("student.txt", student.student("Amirah"), function (err) {
  if (err) throw err;
  console.log("done");
});

http
  .createServer(function (req, res) {
    fs.readFile("student.txt", function (err, data) {
      res.writeHead(200, { "content-Type": "student.txt" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8000);
