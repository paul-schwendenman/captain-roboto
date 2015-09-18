var Slack = require('slack-client');
var apiToken = '';

if (process.argv.length < 3) {
    console.error("Please specify an API key.");
} else {
    apiToken = process.argv[2];
}

// set base (root) directory
global.__base = __dirname + '/';

global.baseDir = function() {
    return global.__base;
}
var bot = require(__base + 'src/bot');

// run bot
var slack = new Slack(apiToken, true, true);
bot.run(apiToken, slack);
