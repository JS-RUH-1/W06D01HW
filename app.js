
// -------
// TASK #1
// -------
const stdName = require('./Student.js');
stdName.getStdName('Yasser');
stdName.getStdName('Ali');
stdName.getStdName('Tamimi');

// -------
// TASK #2
// -------
const triangle = require('./triangle.js');
const square = require('./square.js');
triangle.tri();
square.sq();

// -------
// TASK #3
// -------
const fs = require('fs');
fs.writeFile("me.txt","name is Yasser Altamimi (born at 1997) \n",
function (err) {
    if (err) throw err;
    console.log("Replaced");
});
fs.readFile('me.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)
  })
  

// -------
// TASK #4
// -------
fs.writeFile("myFile.js",'const myData={"Name":"Yasser Altamimi",\n"Age":"24",}',
function (err) {
    if (err) throw err;
    console.log("Replaced");
});
const myData={
    "NAME":"YASSER ALTAMIMI",
    "AGE":"24"
}
const http = require('http');
http.createServer(function (request, response) {
   fs.readFile('myFile.js'//'index.html'
   ,function(error,data){
       response.write(data)
       response.write(JSON.stringify(myData))
        response.end()
})
}).listen(3003);