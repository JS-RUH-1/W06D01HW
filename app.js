const Name = require('./Task01/student');

 console.log(Name.stdName('Huda'));
 console.log(Name.stdName('Shahd'));
 console.log(Name.stdName('Fato'));
/////////////////////////////



 const http =require('http');

const fs=require('fs');

const server= http.createServer((req,res)=>{

    //For text

    // fs.readFile('./Task03/myinfo.txt',null,(err,data)=>{
    //     if(err){
    //         res.end('The File was not successfully')
    //     }
    //     else{
    //         res.end(data)
    //     }
    // })

//For HTML 

//  fs.readFile('./Task04/index.html',null,(err,data)=>{
// if(err){
//     res.end('file not working')
// }
// else{
//     res.end(data)
// }

//  })

//For Json

fs.readFile('./Task04/info.json',null,(err,data)=>{
    if(err){
        res.end('file not working')
        
    }
    else{
        const Name = JSON.parse(data)
        console.log("Names is :" ,Name)
        res.end(data)
    }
    
     })
})

server.listen(3002,()=>{
    console.log('server running....')
})

////////////////////////////
console.log('-------------------------')
let {width}=require('./Task02/shape')
 
console.log('The square ')

console.log('The width is :'+ width)
 
console.log('The area is :'+ (width*width))
console.log('-------------------------')
//////////////////////////////////////

// let {width}=require('./Task02/shape')
let {height}=require('./Task02/shape')

console.log('The Triangle is ')

console.log('The width is :'+ width)
console.log('The height is :'+ height)
console.log('The area is :'+ (0.5*width*height))
console.log('-------------------------')

//////////////////////////
