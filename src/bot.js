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

                //handler(message)
                //    .then(function (response) {
                //        channel.postMessage({
                //            as_user: true,
                //            token: apiToken,
                //            text: response
                //        });
                //    });

                // hack alert
                var promise = handler(message);

                if (promise.then) {
                    promise.then(function (response) {
                        channel.postMessage({
                            as_user: true,
                            token: apiToken,
                            text: response
                        });
                    });
                }
                else {
                    var response = promise; // promise is really a string here

                    channel.postMessage({
                        as_user: true,
                        token: apiToken,
                        text: response
                    });
                }
            }
        }
    });

    slack.on('error', function(error) {
        console.error('Error: ' + error);
    });

    slack.login();
}


