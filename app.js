
let student_name = require('./task1/student.js')
student_name.Sname("abrar")

let fs = require("fs")
fs.readFile('./task3/text.txt', (err, data)=>{
    console.log(data.toString());
}
)

const http = require("http")
const srver = http.createServer(function(req,res){
    fs.readFile("./task4/index.html",function(err,contents){
        if (err) throw err
        res.write(contents)
        return  res.end()

    })
})

srver.listen(8000)