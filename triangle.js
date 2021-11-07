const shapes = require("./shape.js");

exports.tri = () => {
  shapes.width = 3;
  shapes.height = 4;
  console.log("triangle height: " + shapes.height);
  console.log("triangle width: " + shapes.width);
  console.log("triangle area: " + (shapes.width * shapes.height) / 2);
};
