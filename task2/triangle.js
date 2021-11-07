const myFunc = require("./shape.js")

myFunc.width = 5;
myFunc.height = 15;

let result = (myFunc.width * myFunc.height) / 2
console.log("Width " + myFunc.width);
console.log("height " + myFunc.height);
console.log("Triangle Area " + result);