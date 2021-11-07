const student = require("./student");
student.print("Hend");
student.print("Hanin");
student.print("Maryam");

const square = require("./square");
square.display()
const triangel = require("./triangel");
triangel.display()

const fs =require("fs")
fs.readFile("file.txt","utf-8", function (err,data){
    console.log(data);
    if (err) console.log(err);
})
