const shape = require('./shape');

shape.width = 2;
shape.height = 4;
shape.area = 0.5*shape.width*shape.height;

function printTringle (){

console.log(`width = ${shape.width} height = ${shape.height} Area = ${shape.area}`);

}

module.exports = {printTringle};