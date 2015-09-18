'use strict';

require('../test.setup');
var xkcd_bot = require(baseDir() + 'src/xkcd_bot/xkcd_bot');
var expect  = require('chai').expect;

describe('XKCD bot', function () {

    //these tests do not work

    //
    //it.only('should return a URL to a comic', function(done) {
    //
    //    var promise = xkcd_bot.handleMessage();
    //
    //    promise.then(function(response) {
    //        expect(response).to.have.string('http://google');
    //        done();
    //    });
    //
    //    return promise;
    //});
    //
    //it('should return the most recent comic', function() {
    //
    //    xkcd_bot.getMostRecentComicJson = function() {
    //        return 'blah';
    //    };
    //
    //    var promise = xkcd_bot.handleMessage();
    //    promise.then(function(response) {
    //        console.log(response);
    //        expect(response).to.have.string('blah');
    //    });
    //
    //    return promise;
    //});

});