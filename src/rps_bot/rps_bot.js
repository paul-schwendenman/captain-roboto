'use strict';

var defs = require(__base + 'src/rps_bot/rps_bot_defs');
var determinator = require(__base + 'src/rps_bot/rps_determinator');

module.exports = {
    handleMessage: handleMessage,
    playRPS: playRPS
};


function handleMessage(message) {
    var tokens = message.text.split(' ', 2);
    if (tokens.length > 1) {
        var argument = tokens[1],
            found = ['rock', 'paper', 'scissors'].indexOf(argument.toLowerCase());
        if (found < 0) {
            return defs.wrongArgumentMessage;
        } else {
            return playRPS(argument);
        }
    }
    return defs.noArgumentMessage;
}

function playRPS(player) {
    var opponent = generateChoice();
    var result = determinator.computeResult(player, opponent);
    return formatResponse(result, player, opponent);
}

function generateChoice() {
    var options = ['rock', 'paper', 'scissors'];

    return options[Math.floor((Math.random() * options.length))];
}

function formatResponse(result, player, opponent) {

    var choice = 'Picked ' + opponent + '.';
    var outcome = '';

    switch (result) {
        case defs.WIN: outcome = defs.youWinMessage; break;
        case defs.TIE: outcome = defs.youTieMessage; break;
        case defs.LOSS: outcome = defs.youLoseMessage; break;
    }

    return choice + ' ' + outcome;
}