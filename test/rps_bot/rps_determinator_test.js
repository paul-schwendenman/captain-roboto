// set base (root) directory
global.__base = __dirname + '/../../';

var defs    = require(__base + 'src/rps_bot/rps_bot_defs');
var determinator = require(__base + 'src/rps_bot/rps_determinator');
var expect  = require('chai').expect;

describe('RPS Determinator Tests', function() {

    it('rock beats scissors', function() {

        var result = determinator.computeResult('rock', 'scissors');

        expect(result).to.equal(defs.WIN);
    });

    it('rock loses to paper', function() {

        var result = determinator.computeResult('rock', 'paper');

        expect(result).to.equal(defs.LOSS);
    });

    it('rock ties rock', function() {

        var result = determinator.computeResult('rock', 'rock');

        expect(result).to.equal(defs.TIE);
    });

    it('scissors beats paper', function() {

        var result = determinator.computeResult('scissors', 'paper');

        expect(result).to.equal(defs.WIN);
    });

    it('paper beats rock', function() {

        var result = determinator.computeResult('paper', 'rock');

        expect(result).to.equal(defs.WIN);
    });
});

