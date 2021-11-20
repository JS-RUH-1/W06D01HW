const studentName = require('./student');
const square = require('./square');
const  triangle  = require('./triangle');
const fs = require('fs');
const http = require('http');



studentName.studentName('amjad')
studentName.studentName('ashrf ')
studentName.studentName('masha')

square.square()
triangle.triangle()

let html ;
let json = {
    greetings:"Hello World!"
}
fs.readFile(__dirname+'/mySelf.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)
  })
  fs.readFile(__dirname+'/index.html', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)
      html = data;
  })

  const requestListener = function (req, res) {
    res.writeHead(200);
    // res.write(html);
    res.write(json);

    //the result weite only expet string type 
  }
  

const server = http.createServer(requestListener);
server.listen(8080);