const shape = require ('./shape')

let height = 150;
let width = 40;
let area = height * width;

function printSquare (){
    console.log ('====== SQUARE ======\n',`Height is : ${height} , Width ${width} and Area : ${area}`,'\n====================')
}

module.exports = { printSquare }