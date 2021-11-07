const shape = require ('./shape')

shape.height = shape.height;
shape.width = 40;
shape.area = shape.height * shape.width;

function printSquare (){
    console.log ('====== SQUARE ======\n',`Height is : ${shape.height} , Width ${shape.width} and Area : ${shape.area}`,'\n====================')
}

module.exports = { printSquare }