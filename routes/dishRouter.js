const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end("Will send all the dishes");
    })
    .post((req, res, next) => {
        res.end("Will add dish " + req.body.name + " with details " + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end("Put operation not supported");
    })
    .delete((req, res, next) => {
        res.end("Delete all the dishes");
    });

dishRouter.route('/:dishId')
    .get((req, res, next) => {
        res.end("Will send all the dish " + req.params.dishId);
    })
    .put((req, res, next) => {
        res.write("Updating the dish");
        res.end("Will Update dish " + req.body.name + " with details " + req.body.description);
    })
    .delete((req, res, next) => {
        res.end("we will Delete the dish");
    });

module.exports = dishRouter;