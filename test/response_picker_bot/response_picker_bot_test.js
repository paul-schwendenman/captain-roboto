'use strict';

require('../test.setup');

var response_picker_bot = require(baseDir() + 'src/response_picker_bot/response_picker_bot');
var expect = require('chai').expect;

var options = [
    'Option A',
    'Option 3',
];


var fakeRandomFn = function(index) {
    return function () {
        return index/options.length;
    };
};


describe('Generate options', function() {
    it('returns a choice from the list of options', function() {
        var response = response_picker_bot.generateResponse(options, fakeRandomFn(0));

        expect(response).to.equal(options[0]);
    });

    it('returns the 3rd choice from the list of options', function() {
        var response = response_picker_bot.generateResponse(options, fakeRandomFn(2));

        expect(response).to.equal(options[2]);
    });
});
