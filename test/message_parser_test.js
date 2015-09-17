var chai = require('chai');
var messageParser = require('../src/message_parser');

describe('Message Parser', function() {

    it('parses a message and dispatches to a handler', function() {
        var handler = messageParser.route('!whatup');
        chai.assert(handler !== undefined);
    });

    it('returns a valid handler when given a valid message', function() {
        var handler = messageParser.route('!valid');
        chai.expect(handler.handleMessage).to.be.a('function');
    });
});