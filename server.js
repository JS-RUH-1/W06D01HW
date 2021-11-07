let http = require("http");
let fs = require("fs");
let sandBox = {
  name: "Abdulmajeed",
  learning: "website development",
};
http
  .createServer(function (req, res) {
    // fs.readFile("index.html", function (err, data) {
    //   if (err) console.log(err);
    //   res.write(data);
    //   return res.end();
    // });

    res.write(JSON.stringify(sandBox));
    return res.end();
  })
  .listen(8000);
