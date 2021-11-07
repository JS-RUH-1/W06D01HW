const shape = require("./shape");
const width = shape.width;
module.exports.square = function () {
  console.log(
    "width is: " +
      width +
      " height is: " +
      width +
      " , Area of square is :" +
      width * width
  );
};
