'use strict';

var rps_bot = require('../../src/rps_bot');

var expect = require('chai').expect;

describe('RPS Bot Tests', function () {

    beforeEach(function () {
    });

    it('should pass', function() {
        var message = {
            type: 'message',
            text: '!rps'
        };

        var response = rps_bot.handleMessage(message);

        expect(response).to.equal(rps_bot.helpfulMessage);
    });
});
