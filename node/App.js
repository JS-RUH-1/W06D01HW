let fs = require('fs')
const nameStudent =require('./student')
const areaT =require('./triangle')
const areaS =require('./square')
const http = require('http');
// #task 1
// fs.writeFile('name.text', "Student name is" + nameStudent.name("Mushira") ,function(err){
//     if (err) throw err;
// })

// #Task 2
// fs.writeFile('name.text', "Area for triangle " + areaT.tringle('') ,function(err){
//     if (err) throw err;
// })

fs.writeFile('name.text', "Area for square " + areaS.square('') ,function(err){
    if (err) throw err;
})

// Task 3 create informatio text file by(fs.write() or fs append())
// fs.writeFile('information.text',"information About me", function(err){
//     if (err) throw err;
//     console.log('Saved!');
// })

// fs.appendFile('information.text',"Mushira Almalki", function(err){
//     if (err) throw err;
//     console.log('Saved!');
// })
fs.readFile('information.txt', function (err, data) {
    if (err) throw err;
console.log(data); });

// #Task 4
// HTML
// http.createServer(function (request, response) {
// //   res.writeHead(200, {'Content-Type': 'text/html'});
// //   res.write(req.url);
// fs.readFile('./index.html', function(err, data) {
//             if(err) throw err
//           response.write(data);
//   return response.end();
// });
// }).listen(8080);

// Json
http.createServer(function (request, response) {    
     let page = JSON.stringify(fileJSON);
     response.write(data);
     return response.end();
  
}).listen(8080);
