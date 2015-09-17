'use strict';

module.exports = {
    handleMessage: handleMessage,
    playRPS: playRPS,
    computeResult: computeResult,
    WIN: 1,
    TIE: 0,
    LOSS: -1,
    noArgumentMessage: 'Hey!  Please add an argument!  Rock, paper, or scissors?',
    wrongArgumentMessage: 'ROCK. PAPER. OR SCISSORS.  NOT THAT HARD.',
    youWinMessage: 'YOU WIN!',
    youLoseMessage: 'YOU LOSE.  HAHAHAhahahahahhaha!!!',
    youTieMessage: 'YOU TIE.'
};


function handleMessage(message) {
    var tokens = message.text.split(' ', 2);
    if (tokens.length > 1) {
        var argument = tokens[1],
            found = ['rock', 'paper', 'scissors'].indexOf(argument.toLowerCase());
        if (found < 0) {
            return this.wrongArgumentMessage;
        } else {
            return playRPS(argument);
        }
    }
    return this.noArgumentMessage;
}

function playRPS(player) {
    var opponent = generateChoice();
    var result = computeResult(player, opponent);
    return formatResponse(result, player, opponent);
}

function computeResult(player, opponent) {
    var matrix = {
        'rock': {
            'rock': 0,
            'paper': -1,
            'scissors': 1
        },
        'paper': {
            'rock': 1,
            'paper': 0,
            'scissors': -1
        },
        'scissors': {
            'rock': -1,
            'paper': 1,
            'scissors': 0
        }
    };

    return matrix[player][opponent];
}

function generateChoice() {

    return 'rock';
}

function formatResponse(result, player, opponent) {

    var outcome = this.youLoseMessage;

    //switch (result) {
    //    case
    //}


    //youWinMessage: 'YOU WIN!',
    //    youLoseMessage: 'YOU LOSE.  HAHAHAhahahahahhaha!!!',
    //    youTieMessage: 'YOU TIE.'


    return outcome;
}