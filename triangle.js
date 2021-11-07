let shape = require('./shape');

shape.width=5;
shape.height=9;
exports.areaTriangle=()=>{
console.log("The width :" + shape.width);
console.log("The height :" + shape.height);
console.log("The area of a triangle = " + (0.5 * shape.height * shape.width));
}
