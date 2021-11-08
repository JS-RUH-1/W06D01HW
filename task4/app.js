import http from 'http';
import fs from 'fs';

let content = "";

fs.readFile('./index.html', 'utf8', (err, data) => {
    if(err){
        console.log(err);
        return
    }
    content = data
})

let json = JSON.stringify(
    {
        type: "JSON",
        content: "Showing JSON in the page"
    }
    )

const port = 4000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.end(json)
});

server.listen(port, () => {console.log(`Server running at port ${port}`);});