let triangle = require("./triangle");
let square = require("./square");

let fs = require("fs");

fs.writeFile("Area.txt", triangle.triangle(5, 5), function (err) {
  if (err) throw err;
  console.log("done");
});

fs.writeFile("Area.txt", square.square(2), function (err) {
  if (err) throw err;
  console.log("done");
});
