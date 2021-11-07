const shape = require ('./shape')

shape.height = 130;
shape.width = 89;
shape.area = shape.height * shape.width; // idk how to calculate area of triangle

function printTriangle (){
    console.log ('===== TRIANGLE =====\n',`Height is : ${shape.height} , Width ${shape.width} and Area : ${shape.area}`,'\n====================')
}

module.exports = { printTriangle }