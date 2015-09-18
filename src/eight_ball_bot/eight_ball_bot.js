'use strict';

var defs = require(__base + 'src/eight_ball_bot/eight_ball_bot_defs');

module.exports = {
    handleMessage: handleMessage,
    generateRsponse: generateResponse
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

    var options = ['rock', 'paper', 'scissors'];

    return options[Math.floor((randomFn() * options.length))];
}

