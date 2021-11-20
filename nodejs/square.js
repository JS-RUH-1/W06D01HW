const width = require("./shape")
const height =require("./shape")

width.width = 12
height.height = 12

function square(){
    console.log(width.width,height.height);
    console.log(width.width*height.height);
}


exports.square = square;
