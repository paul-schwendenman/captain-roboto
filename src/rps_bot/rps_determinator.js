'use strict';

var defs = require(__base + 'src/rps_bot/rps_bot_defs');

module.exports = {
    computeResult: computeResult
};



function computeResult(player, opponent) {
    var matrix = {
        'rock': {
            'rock': defs.TIE,
            'paper': defs.LOSS,
            'scissors': defs.WIN
        },
        'paper': {
            'rock': defs.WIN,
            'paper': defs.TIE,
            'scissors': defs.LOSS
        },
        'scissors': {
            'rock': defs.LOSS,
            'paper': defs.WIN,
            'scissors': defs.TIE
        }
    };

    return matrix[player][opponent];
}
/**
 * Created by ralphhale on 9/17/15.
 */
