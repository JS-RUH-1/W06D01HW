let http = require("http");
let fs = require("fs");

// fs.writeFile(
//   "file.txt",
//   `
//     <h1> Amirah </h1>

//     `,
//   function (err) {
//     if (err) throw err;
//     console.log("created");
//   }
// );

// fs.readFile("file.txt", function (err, data) {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.write(data);
//   return res.end();
// });

let info = { name: "Amirah" };
http
  .createServer(function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(info));
  })
  .listen(3000);
