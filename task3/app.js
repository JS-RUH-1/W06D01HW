import fs from 'fs';

fs.readFile('./info.txt', 'utf8', (err, data) =>{
    if(err){
        console.log(err)
        return
    }
    console.log(data)
})