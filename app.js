// const myStedent =require('./task1/student.js')
// myStedent.printName("abrar")

// const fs = require("fs");
// fs.readFile('./task3/abrar.txt' , 'utf-8' , (err , data)=>{
//     console.log(data);

// } )



// task4

const http = require("http");
const fs = require('fs');
const { json } = require("stream/consumers");

const me ={
    name:'abrar', 
    age:'27' ,
    cuntry:'ksa'
}

const jesonme =json.stringify(me);

http.createServer((res) =>{
    fs.readFile('./index.html', 'utf-8',(err , data)=>{


        res.write(jesonme);
        res.end();
    
     })
})

.listen(8000);