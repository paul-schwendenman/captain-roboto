var Slack = require('slack-client');

var apiToken = "xoxb-10812967652-XdB90yvmNLOeCkRxumZDCr28";

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
        var user = slack.getUserByID(message.user);

        if (message.type === 'message') {
            if (user) {
                console.log(channel.name + ':' + user.name + ':' + message.text);

                // send a message back
                channel.postMessage({ token: apiToken, channel: message.channel, text: 'I am Roboto' });
            }
        }
    });

    slack.login();

}


