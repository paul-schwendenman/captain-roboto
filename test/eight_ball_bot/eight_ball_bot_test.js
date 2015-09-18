'use strict';

require('../test.setup');

var eight_ball_bot = require(baseDir() + 'src/eight_ball_bot/eight_ball_bot');
var defs = require(baseDir() + 'src/eight_ball_bot/eight_ball_bot_defs');
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
