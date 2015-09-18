'use strict';

var defs = require(__base + 'src/eight_ball_bot/eight_ball_bot_defs');
var response_picker_bot = require(__base + 'src/response_picker_bot/response_picker_bot');

module.exports = {
    handleMessage: handleMessage,
    generateResponse: generateResponse
};


function handleMessage(message, randomFn) {

    var tokens = message.text.split(' ', 2);
    if (tokens.length > 1) {
         return generateResponse(defs.options, randomFn);

    }
    return defs.noArgumentMessage;
}

function generateResponse(options, randomFn) {
    return response_picker_bot.generateResponse(options, randomFn);
}

