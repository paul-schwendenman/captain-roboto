'use strict';

require('../test.setup');

var eight_ball_bot = require(baseDir() + 'src/eight_ball_bot/eight_ball_bot');
var defs = require(baseDir() + 'src/eight_ball_bot/eight_ball_bot_defs');
var expect = require('chai').expect;

var fakeRandomFn = function(index) {
    return function () {
        return index/defs.options.length;
    };
};



describe('Eight Ball Bot', function() {
    it('returns a helpful message when no argument is passed', function() {
        var message = {
            text: '!eightball'
        };

        var response = eight_ball_bot.handleMessage(message);

        expect(response).to.equal(defs.noArgumentMessage);
    });

    it('returns a response when asked a question', function() {
        var message = {
            text: '!eightball Is this best project ever?'
        };

        var response = eight_ball_bot.handleMessage(message, fakeRandomFn(0));

        expect(response).to.equal(defs.options[0]);

    });

});

describe('Generate options', function() {
    it('returns a choice from the list of options', function() {
        var response = eight_ball_bot.generateResponse(fakeRandomFn(0));

        expect(response).to.equal(defs.options[0]);
    });

    it('returns the 3rd choice from the list of options', function() {
       var response = eight_ball_bot.generateResponse(fakeRandomFn(2));

        expect(response).to.equal(defs.options[2]);
    });
});
