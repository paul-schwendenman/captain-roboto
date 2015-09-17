'use strict';

// set base (root) directory
global.__base = __dirname + '/../../';


var rps_bot = require(__base + 'src/rps_bot/rps_bot');
var defs    = require(__base + 'src/rps_bot/rps_bot_defs');
var expect  = require('chai').expect;

describe('RPS Bot Tests', function () {

    beforeEach(function () {
    });

    it('returns a helpful message when no argument is passed', function() {
        var message = {
            text: '!rps'
        };

        var response = rps_bot.handleMessage(message);

        expect(response).to.equal(defs.noArgumentMessage);
    });

    it('returns an angry, snarky message when a wrong argument is passed', function() {
        var message = {
            text: '!rps banana'
        };

        var response = rps_bot.handleMessage(message);

        expect(response).to.equal(defs.wrongArgumentMessage);
    });

    it.skip('returns a happy message when the user picks paper and the bot picks rock', function () {
        var message = {
            text: '!rps paper'
        };

        var response = rps_bot.handleMessage(message);

        expect(response).to.have.string(defs.youWinMessage);
        expect(response.toLowerCase()).to.have.string('rock');
    });


    it('returns a sad message when the user picks scissors and the bot picks rock', function() {
        var message = {
            text: '!rps scissors'
        };

        var response = rps_bot.handleMessage(message);

        expect(response).to.have.string(defs.youLoseMessage);
    });
});

