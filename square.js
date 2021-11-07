const shape = require('./shape');

shape.width = 3;
shape.height = shape.height;
shape.area = shape.width*shape.height;

function printSquare (){

console.log(`width = ${shape.width} heigth = ${shape.height} Area = ${shape.area}`);

}

module.exports = {printSquare};

