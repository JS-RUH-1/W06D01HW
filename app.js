const fs = require("fs");
const http = require("http");

require("./triangle");
require("./square");

fs.readFile('about_me.txt', {encoding: 'utf8'}, (err, data) => {
    console.log(data);
})

const obj = {name: "Emad"}
http.createServer((req, res) => {
    // fs.readFile('index.html', (err, data) => {
    //     res.write(data); 
    //     res.end(); 
    // })
    res.write(JSON.stringify(obj));
    res.end();
}).listen(3000); 