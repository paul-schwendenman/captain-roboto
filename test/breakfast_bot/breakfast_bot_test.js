'use strict';

require('../test.setup');

var breakfast_bot = require(baseDir() + 'src/breakfast_bot/breakfast_bot');
var defs = require(baseDir() + 'src/breakfast_bot/breakfast_bot_defs');
var expect = require('chai').expect;

var fakeRandomFn = function() {
    return 0;
};



describe('Breakfast Bot', function() {
    it('returns a response when user types command', function() {
        var message = {
            text: '!breakfast'
        };

        var response = breakfast_bot.handleMessage(message, fakeRandomFn);

        expect(response).to.equal(defs.options[0]);

    });

});

