const studentName = require('./Task1/student');
const triangle = require('./Task2/triangle');
const square = require('./Task2/square');
const fs = require('fs');

fs.readFile('./Task3/info.txt',"utf8",(err,data)=>{
    if(err) throw err
    console.log(data); 

})

// const u = require('')
let res = studentName.nameS('yasser');

