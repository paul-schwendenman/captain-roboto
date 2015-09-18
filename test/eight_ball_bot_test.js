'use strict';

// set base (root) directory
global.__base = __dirname + '/../';

var eight_ball_bot = require(__base + 'src/eight_ball_bot/eight_ball_bot');
var defs = require(__base + 'src/eight_ball_bot/eight_ball_bot_defs');
var expect = require('chai').expect;

describe('Eight Ball Bot', function() {
    it('returns a helpful message when no argument is passed', function() {
        var message = {
            text: '!eightball'
        };

        var response = eight_ball_bot.handleMessage(message);

        expect(response).to.equal(defs.noArgumentMessage);
    });

});
