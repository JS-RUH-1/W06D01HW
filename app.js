// Task 1
const myFunc = require('./task1/student.js');
myFunc.printName("Turki")



// Task 2
const triangle = require("./task2/triangle")
const square = require("./task2/square")


// Task 3
const fs = require('fs')

fs.readFile('./task3/text.txt', 'utf-8',(err,data)=>{
    if(err) 
        return err;
    console.log(data);
})



// Task 4
