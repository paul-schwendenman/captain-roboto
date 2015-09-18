'use strict';

require('../test.setup');
var rps_bot = require(baseDir() + 'src/rps_bot/rps_bot');
var defs    = require(baseDir() + 'src/rps_bot/rps_bot_defs');
var expect  = require('chai').expect;

var fakeRandom = function (choice) {
    return function() {
        if (choice === 'rock') {
            return 0.1;
        }
        if (choice === 'paper') {
            return 0.5;
        }
        return 0.999; // scissors
    };
};

describe('RPS Bot Tests', function () {

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

    it('returns a happy message when the user picks paper and the bot picks rock', function () {
        var message = {
            text: '!rps paper'
        };

        var response = rps_bot.handleMessage(message, fakeRandom('rock'));

        expect(response).to.have.string(defs.youWinMessage);
        expect(response.toLowerCase()).to.have.string('rock');
    });


    it('returns a sad message when the user picks scissors and the bot picks rock', function() {
        var message = {
            text: '!rps scissors'
        };

        var response = rps_bot.handleMessage(message, fakeRandom('rock'));

        expect(response).to.have.string(defs.youLoseMessage);
        expect(response.toLowerCase()).to.have.string('rock');
    });

    it('returns a tie message when the user picks rock and the bot picks rock', function() {
        var message = {
            text: '!rps rock'
        };

        var response = rps_bot.handleMessage(message, fakeRandom('rock'));

        expect(response).to.have.string(defs.youTieMessage);
        expect(response.toLowerCase()).to.have.string('rock');
    });

    it('returns a happy message when the user types paper in mixed case vs rock', function() {
        var message = {
            text: "!rps PaPeR"
        };

        var response = rps_bot.handleMessage(message, fakeRandom('rock'));

        expect(response).to.have.string(defs.youWinMessage);
        expect(response.toLowerCase()).to.have.string('rock');
    });
});




describe('RPS Generate Choice Tests', function () {

    it('generate choice picks rock', function() {

        var response = rps_bot.generateChoice(fakeRandom('rock'));

        expect(response.toLowerCase()).to.have.string('rock');
    });

    it('generate choice picks paper', function() {

        var response = rps_bot.generateChoice(fakeRandom('paper'));

        expect(response.toLowerCase()).to.have.string('paper');
    });

    it('generate choice picks scissors', function() {

        var response = rps_bot.generateChoice(fakeRandom('scissors'));

        expect(response.toLowerCase()).to.have.string('scissors');
    });
});



describe('RPS Format Tests', function () {

    it('bot picks scissors, player wins', function() {

        var response = rps_bot.formatResponse(defs.WIN, 'scissors');

        expect(response).to.have.string(defs.youWinMessage);
        expect(response.toLowerCase()).to.have.string('scissors');
    });

    it('bot picks scissors, player ties', function() {

        var response = rps_bot.formatResponse(defs.TIE, 'scissors');

        expect(response).to.have.string(defs.youTieMessage);
        expect(response.toLowerCase()).to.have.string('scissors');
    });

    it('bot picks scissors, player loses', function() {

        var response = rps_bot.formatResponse(defs.LOSS, 'scissors');

        expect(response).to.have.string(defs.youLoseMessage);
        expect(response.toLowerCase()).to.have.string('scissors');
    });

    it('bot picks paper, player wins', function() {

        var response = rps_bot.formatResponse(defs.WIN, 'paper');

        expect(response).to.have.string(defs.youWinMessage);
        expect(response.toLowerCase()).to.have.string('paper');
    });

    it('bot picks rock, player ties', function() {

        var response = rps_bot.formatResponse(defs.TIE, 'rock');

        expect(response).to.have.string(defs.youTieMessage);
        expect(response.toLowerCase()).to.have.string('rock');
    });
});

