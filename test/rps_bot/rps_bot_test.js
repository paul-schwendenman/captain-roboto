'use strict';

var rps_bot = require('../../src/rps_bot');

var expect = require('chai').expect;

describe('RPS Bot Tests', function () {

    beforeEach(function () {
    });

    it('returns a helpful message when no argument is passed', function() {
        var message = {
            text: '!rps'
        };

        var response = rps_bot.handleMessage(message);

        expect(response).to.equal(rps_bot.noArgumentMessage);
    });

    it('returns an angry, snarky message when a wrong argument is passed', function() {
        var message = {
            text: '!rps banana'
        };

        var response = rps_bot.handleMessage(message);

        expect(response).to.equal(rps_bot.wrongArgumentMessage);
    });
});
