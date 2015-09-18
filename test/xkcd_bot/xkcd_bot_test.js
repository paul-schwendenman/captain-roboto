'use strict';

require('../test.setup');
var xkcd_bot = require(baseDir() + 'src/xkcd_bot/xkcd_bot');
var expect  = require('chai').expect;

describe('XKCD bot', function () {

    it('should return a URL to a comic', function(done) {

        var promise = xkcd_bot.handleMessage();

        promise.then(function(response) {
            expect(response).to.have.string('http://imgs.xkcd.com');
            done();
        }).done();

    });

});