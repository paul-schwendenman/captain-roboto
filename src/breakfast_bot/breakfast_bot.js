'use strict';

var defs = require(__base + 'src/breakfast_bot/breakfast_bot_defs');
var response_picker_bot = require(__base + 'src/response_picker_bot/response_picker_bot');

module.exports = {
    handleMessage: handleMessage,
    generateResponse: generateResponse
};


function handleMessage(message, randomFn) {
    return generateResponse(defs.options, randomFn);
}

function generateResponse(options, randomFn) {
    return response_picker_bot.generateResponse(options, randomFn) + '!';
}
