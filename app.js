var express = require('express');

var Slack = require('slack-client');
var apiToken = process.argv[2];

// set base (root) directory
global.__base = __dirname + '/';

global.baseDir = function() {
    return global.__base;
}

var app = express();
var bot = require(__base + 'src/bot');

// run bot
var slack = new Slack(apiToken, true, true);
bot.run(apiToken, slack);

module.exports = app;
