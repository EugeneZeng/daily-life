"use strict";
const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const indexRouter = express.Router();
const apiRouter = require("./api");
const config = require("../configure/config");

let app = express();
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true, parameterLimit: 50000 }));

app.use(express.static(path.join(__dirname, '../dist')));
app.use('/vedios', express.static(config.vedioPath));
app.use('/', indexRouter);
app.use('/api', apiRouter);

app.set('view engine', 'html');

indexRouter.get('/', function(req, res) {
    res.redirect("index.html");
});

module.exports = app;