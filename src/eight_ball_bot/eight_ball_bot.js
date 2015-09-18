'use strict';

var defs = require(__base + 'src/eight_ball_bot/eight_ball_bot_defs');

module.exports = {
    handleMessage: handleMessage,
    generateResponse: generateResponse
};


function handleMessage(message, randomFn) {

    var tokens = message.text.split(' ', 2);
    if (tokens.length > 1) {
         return generateResponse(randomFn);

    }
    return defs.noArgumentMessage;
}

function generateResponse(randomFn) {
    randomFn = randomFn || Math.random;

    return defs.options[Math.floor((randomFn() * defs.options.length))];
}

