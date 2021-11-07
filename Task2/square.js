exports.square = function (value) {
  const shape = require("./shape");

  shape.width = value;

  console.log("the Width is : " + shape.width);
  console.log("the height is : " + shape.height);
  // console.log("the area is : "+(shape.width * shape.height) / 2)
  return "the area is : " + shape.width * shape.height;
};
