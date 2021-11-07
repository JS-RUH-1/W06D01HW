const { print } = require("./student");
const { square } = require("./square");
const { tringle } = require("./tringle");
const fs = require("fs");
const http = require("http");

// Task 1 - 2
print("Ahmed");
tringle();
square();
//Task 3
fs.readFile("./info.txt", "utf-8", (err, data) => {
  if (err) return console.log("we cant read the file ");
  console.log(`This is my info : ${data}`);
});
//Task 4.1
// http.createServer((req,res)=>{
// if(res){
//     fs.readFile("./index.html","utf-8",(err, data)=>{
//         if(err) return console.log("we cant read the file ")
//         res.write(data)
//         res.end();
//     })
// }
// }).listen(3000)

//Task 4.2
http
  .createServer((req, res) => {
    if (res) {
      fs.readFile("./info.json", "utf-8", (err, data) => {
        if (err) return console.log("we cant read the file ");
        res.write(JSON.stringify(data));
        res.end();
      });
    }
  })
  .listen(3000);
