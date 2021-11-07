const shape = require ('./shape')

let height = shape.height;
let width = 89;
let area = height * width; // idk how to calculate area of triangle

function printTriangle (){
    console.log ('===== TRIANGLE =====\n',`Height is : ${height} , Width ${width} and Area : ${area}`,'\n====================')
}

module.exports = { printTriangle }