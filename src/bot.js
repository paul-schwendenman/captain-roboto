var channelName = 'pillar-academy-test';

var router = require(__base + 'src/router/router');
var routes = require(__base + 'src/router/routes');

module.exports = {
    run: run
};

function run(apiToken, slack) {
    slack.on('open', function () {
        console.log("Connected!");
    });

    slack.on('message', function(message) {
        var text = message.text;
        var channel = slack.channels[message.channel];
        if (channel.name === channelName &&
                text.indexOf('!') === 0 &&
                text.length > 1) {
            var command = text;
            if (text.indexOf(' ') >= 0) {
                command = text.substring(0, text.indexOf(' '));
            }

            var handler = router.getHandler(command, routes.routeTable);
            if (handler) {
                var response = handler(message);
                channel.postMessage({
                    as_user: true,
                    token: apiToken,
                    text: response
                });
            }
        }
    });

    slack.on('error', function(error) {
        console.error('Error: ' + error);
    });

    slack.login();
}


