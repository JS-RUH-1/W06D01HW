const http = require('http');
const fs = require('fs')

const me = {
    name: "Turki",
    age: 24,
    cuntry: "KSA"
}

const jsonMe = JSON.stringify(me)


http.createServer(function(request, response) {
    fs.readFile('./index.html', 'utf-8',(err,data)=>{
        if(err) 
            return err;
        // response.write(data);
        response.write(jsonMe)
        response.end();
    })
    
}).listen(3000);
