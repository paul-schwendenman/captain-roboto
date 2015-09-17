var Slack = require('slack-client');

var apiToken = "xoxb-10812967652-XdB90yvmNLOeCkRxumZDCr28";
var channelName = 'pillar-academy-test';

module.exports = {
    run: run
};

function run() {
    var slack = new Slack(apiToken, true, true);

    slack.on('open', function () {
        console.log("Connected!");
    });

    slack.on('message', function(message) {
        
    });

    slack.login();
}


