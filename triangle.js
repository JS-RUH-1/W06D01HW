const triangle = require('./shape')

// let width = triangle.width;
// width = 4;

triangle.width = 4;

// let height = triangle.height;
// height = 5;

triangle.height = 5;

const area = triangle.width * triangle.height;
console.log("Triangle: width= ", triangle.width, " height= ", triangle.height, " Area= ", area)
