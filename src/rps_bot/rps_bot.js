'use strict';

var defs = require(__base + 'src/rps_bot/rps_bot_defs');
var determinator = require(__base + 'src/rps_bot/rps_determinator');
var responsePicker = require(__base + 'src/response_picker_bot/response_picker_bot');

module.exports = {
    handleMessage: handleMessage,
    playRPS: playRPS,
    generateChoice: generateChoice,
    formatResponse: formatResponse
};


function handleMessage(message, randomFn) {

    var tokens = message.text.split(' ', 2);
    if (tokens.length > 1) {
        var argument = tokens[1].toLowerCase(),
            found = ['rock', 'paper', 'scissors'].indexOf(argument);
        if (found < 0) {
            return defs.wrongArgumentMessage;
        } else {
            var opponent = generateChoice(randomFn);

            return playRPS(argument, opponent);
        }
    }
    return defs.noArgumentMessage;
}

function playRPS(player, opponent) {
    var result = determinator.computeResult(player, opponent);
    return formatResponse(result, opponent);
}

function generateChoice(randomFn) {
    var options = ['rock', 'paper', 'scissors'];
    return responsePicker.generateResponse(options, randomFn);
}

function formatResponse(result, opponent) {

    var choice = 'Picked ' + opponent + '.';
    var outcome = '';

    switch (result) {
        case defs.WIN: outcome = defs.youWinMessage; break;
        case defs.TIE: outcome = defs.youTieMessage; break;
        case defs.LOSS: outcome = defs.youLoseMessage; break;
    }

    return choice + ' ' + outcome;
}
