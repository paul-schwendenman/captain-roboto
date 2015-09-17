var assert = require('chai').assert;
var messageParser = require('../src/MessageParser');

describe('Message Parser', function() {

    it('joins specified Slack channel', function() {
        var successfulResponseCode = 'ok';
        var responseCode = messageParser.connect('pillar-academy-test');

        assert.equal(responseCode, successfulResponseCode);
    });
});