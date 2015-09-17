var Slack = require('slack-client');

var apiToken = "xoxb-10812967652-XdB90yvmNLOeCkRxumZDCr28";

module.exports = {
    connect: connect
};

function connect(channelName) {
    var slack = new Slack(apiToken, true, true);
    var response = slack.channels.join(channelName);
    if (response.ok == true) {
        return 'ok'
    }
    return 'not ok'
};
