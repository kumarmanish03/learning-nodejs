// const Person = require('./person');

// person1 = new Person('Manish Kumar', 20);

// person1.greetings();

const fs  = require('fs');
const path = require('path');
const http = require('http');

const server = http.createServer((req, res) => {

    let filePath = path.join(__dirname, "public", req.url == '/' ? 'index.html' : req.url);

    let contentType = 'text/html';

    const extname = path.extname(filePath);

    if(contentType == 'text/html' && extname == "") filePath += '.html';

    switch(extname){
        case '.js' :
            contentType = 'text/javascript';
            break;
        case '.css' :
            contentType = 'text/css';
            break;
    }

    fs.readFile(filePath, (err, content) => {
        if(err){
            res.writeHead(500);
            res.end(err);
        }else {
            res.writeHead(200, contentType);
            res.end(content, 'utf-8');
        }
    })

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Opening on PORT ${PORT}`));