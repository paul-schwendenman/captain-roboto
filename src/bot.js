var Slack = require('slack-client');

var apiToken = "xoxb-10812967652-XdB90yvmNLOeCkRxumZDCr28";

var rps_bot = require('./src/rps_bot');


module.exports = {
    run: run
};

function run() {

    var slack = new Slack(apiToken, true, true);


    slack.on('open', function () {
        var channels = Object.keys(slack.channels)
            .map(function (k) { return slack.channels[k]; })
            .filter(function (c) { return c.is_member; })
            .map(function (c) { return c.name; });

        var groups = Object.keys(slack.groups)
            .map(function (k) { return slack.groups[k]; })
            .filter(function (g) { return g.is_open && !g.is_archived; })
            .map(function (g) { return g.name; });

        console.log('Welcome to Slack. You are ' + slack.self.name + ' of ' + slack.team.name);

        if (channels.length > 0) {
            console.log('You are in: ' + channels.join(', '));
        }
        else {
            console.log('You are not in any channels.');
        }

        if (groups.length > 0) {
            console.log('As well as: ' + groups.join(', '));
        }
    });

    slack.on('message', function(message) {
        var channel = slack.getChannelGroupOrDMByID(message.channel);

        if (message.type === 'message') {

            var response = rps_bot.handleMessage(message);

            if (response) {
                channel.postMessage({ token: apiToken, channel: message.channel, text: response });
            }
        }
    });

    slack.login();

}


