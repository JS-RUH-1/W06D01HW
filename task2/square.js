const myFunc = require("./shape.js")

myFunc.width = 10

let result = myFunc.width * myFunc.height


console.log("Width " + myFunc.width);
console.log("height " + myFunc.height);
console.log("Square Area " + result);