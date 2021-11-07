const student = require("./student");
student.displayName("Abdulmajeed");
student.displayName("Ahmed");
student.displayName("Khaled");
const triangle = require("./triangle");
const square = require("./square");
triangle.triangle();
square.square();

const fs = require("fs");
fs.readFile("./abdulmajeed.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});
