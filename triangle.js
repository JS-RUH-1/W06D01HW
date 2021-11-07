const shape = require("./shape");
shape.setHeight(4);
shape.setWidth(5);

exports.printTrin = function () {
  console.log(
    "The height is : " +
      shape.getHeight() +
      " and the width is : " +
      shape.getWidth() +
      " and the area is: " +
      shape.getWidth() * shape.getHeight() * 0.5
  );
};
