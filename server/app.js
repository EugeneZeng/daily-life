"use strict";
const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const indexRouter = express.Router();
const apiRouter = require("./api");

let app = express();
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true, parameterLimit: 50000 }));

app.use(express.static(path.join(__dirname, '../dist')));
app.use('/', indexRouter);
app.use('/api', apiRouter);

app.set('view engine', 'html');

indexRouter.get('/', function(req, res) {
    res.redirect("index.html");
});

module.exports = app;