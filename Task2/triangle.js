exports.triangle = function (num1, num2) {
  const shape = require("./shape");

  shape.width = num1;
  shape.height = num2;

  console.log("the Width is : " + shape.width);
  console.log("the height is : " + shape.height);
  // console.log("the area is : "+(shape.width * shape.height) / 2)
  return "the area is : " + (shape.width * shape.height) / 2;
};
