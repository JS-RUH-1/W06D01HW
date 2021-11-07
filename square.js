const shape = require("./shape");
shape.setWidth(10);
exports.printSqua = function () {
  console.log(
    "The height is : " +
      shape.getHeight() +
      " and the width is : " +
      shape.getWidth() +
      " and the area is: " +
      shape.getWidth() * shape.getHeight()
  );
};
