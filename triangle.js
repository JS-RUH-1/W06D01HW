const shape = require("./shape");
const width = shape.width;
const height = shape.height;
module.exports.triangle = function () {
  console.log(
    "width is: " +
      width +
      " height is: " +
      height +
      " , Area of triangle is :" +
      0.5 * width * height
  );
};
