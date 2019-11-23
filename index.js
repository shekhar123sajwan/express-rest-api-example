const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');

const hostName = 'localhost';
const Port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/dishes', dishRouter);

app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.end('<html><body>This is Express Server</body></html>')
})
http.createServer(app).listen(Port, hostName, () => {
    console.log(`Server running http://${hostName}:${Port}`);
})