'use strict';

require('../test.setup');
var dice_bot = require(baseDir() + 'src/dice_bot/dice_bot');
var chai = require('chai');

describe('Dice Bot', function() {

    it('returns number as a string', function() {
        var number = dice_bot.handleMessage();
        chai.expect(number).to.be.a('string');
    });

    var getRandomnessFn = function(sixth) {
        return function () {
            return (sixth - 1) / 6;
        };
    };

    it('returns one when the randomness function is in the first sixth of zero to one', function () {
        chai.assert(dice_bot.rollDice(getRandomnessFn(1)) === '1');
    });

    it('returns three when the randomness function is in the third sixth of zero to one', function () {
        chai.assert(dice_bot.rollDice(getRandomnessFn(3)) === '3');
    });

    it('returns six when the randomness function is in the last sixth of zero to one', function () {
        chai.assert(dice_bot.rollDice(getRandomnessFn(6)) === '6');
    });

});