
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if(url==='/') {

    //Suppose i want to read the file which we created after submitting the form ans show it on the '/' then:-
        fs.readFile('message.txt' , {encoding: 'utf-8'} , (err, data) => {
            if(err) {
                console.log(err);
            }
            // console.log('data written inside the file is ' + data);
            res.write('<html>');
            res.write('<head><title>Enter Message</title></head>');
            res.write(`<body>${data}</body>`);
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
            res.write('</html>');
            return res.end();
            
        } );
        
    }

    else if(url==='/message' && method==='POST') {

    /*Suppose redirecting the user to '/' ,
    suppose we want to parse the data and store it into the file i.e what user enters in the input box that should be written in any file and saved*/
        const body = [];
        req.on('data', (chunk) => {
        // console.log(chunk);
        body.push(chunk);
        });

        req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        // console.log(parsedBody);
        const message = parsedBody.split('=')[1];
        // console.log(message);
        fs.writeFileSync('message.txt', message);
        });
        
    //Now since our data is parsed now we can redirect the user to '/'
        res.statusCode = 302;
        res.setHeader('Location' , '/');
        return res.end();
    }
    

});

server.listen(4000);