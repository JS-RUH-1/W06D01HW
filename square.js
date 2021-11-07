const shapes = require("./shape.js");

exports.sq = () => {
  shapes.width = 5;
  console.log("square height: " + shapes.width);
  console.log("square width: " + shapes.width);
  console.log("square area: " + shapes.width * shapes.width);
};
