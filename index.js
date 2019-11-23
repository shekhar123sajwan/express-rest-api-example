const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostName = 'localhost';
const Port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/dishes', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/plain');
    next();
})


app.get('/dishes', (req, res, next) => {
    res.end("Will send all the dishes");
})

app.post('/dishes', (req, res, next) => {
    res.end("Will add dish " + req.body.name + " with details " + req.body.description);
})

app.put('/dishes', (req, res, next) => {
    res.statusCode = 403;
    res.end("Put operation not supported");
})

app.delete('/dishes', (req, res, next) => {
    res.end("Delete all the dishes");
})

app.get('/dishes/:dishId', (req, res, next) => {
    res.end("Will send all the dish " + req.params.dishId);
})

app.put('/dishes/:dishId', (req, res, next) => {
    res.write("Updating the dish");
    res.end("Will Update dish " + req.body.name + " with details " + req.body.description);
})

app.delete('/dishes/:dishId', (req, res, next) => {
    res.end("we will Delete the dish");
})

app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.end('<html><body>This is Express Server</body></html>')
})
http.createServer(app).listen(Port, hostName, () => {
    console.log(`Server running http://${hostName}:${Port}`);
})