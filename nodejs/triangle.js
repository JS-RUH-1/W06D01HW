const width = require("./shape")
const height =require("./shape")

width.width=10
height.height=13

function triangle(){
    console.log(width.width,height.height);
    console.log((height.width * height.height) / 2);
}


exports.triangle = triangle;