
const http = require('http');

const server = http.createServer((req, res) => {
    
    //Just for Analysis
        // console.log(req.url);
        // console.log(req.method);
        // console.log(req.headers);
        // process.exit();

    //Handling the request
        //First let's Handle the url request

    if(req.url == '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body>Hello from my Node.js Server!</h1></body>')
        res.write('</html>');
        res.end();
    }
    else if(req.url == '/home') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body>Welcome home</h1></body>')
        res.write('</html>');
        res.end();
    }
    else if(req.url == '/about') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body>Welcome to About Us page</h1></body>')
        res.write('</html>');
        res.end();
    }
    else if(req.url == '/node') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body>Welcome to my Node Js project</h1></body>')
        res.write('</html>');
        res.end();
        }
});

server.listen(4000);

