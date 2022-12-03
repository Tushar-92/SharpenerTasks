const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get('/login', (req, res, next) => { 
    res.send(`
    <form onsubmit="localStorage.setItem('username' , document.getElementById('username').value)" action="/">
    <input id="username" type="text" name="username" placeholder="username"><br>
    <button type="submit">Login</button>
    </form>`);
});

app.get('/' , (req, res, next) => {

    fs.readFile('userchats.txt' , (err , data) => {
        if(err) {
            console.log(err);
            data = 'No Chat Exixts';
        } 
        
        res.send(`
        ${data}
        <form action="/" onsubmit="document.getElementById('username').value = localStorage.getItem('username')"  method="POST">
        <input type="hidden" name="username" id="username">
        <input type="text" name="message" placeholder="message"><br>
        <button type="submit">Send</button>
        </form>`);

    });
    
});


app.post('/', (req, res, next) => {
    console.log(`${req.body.username}: ${req.body.message}`);
    
    fs.writeFile("userchats.txt" , `${req.body.username}: ${req.body.message}  ` , {flag: 'a'} ,(err) => {
        err ? console.log(err) : res.redirect('/');
    });
    
});


app.listen(3000);
