var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var bot = require('./src/bot');

// uncomment after placing your favicon in /public
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// run bot
bot.run();

module.exports = app;
