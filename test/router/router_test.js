
require('../test.setup');
var chai = require("chai");
var router = require(baseDir() + "src/router/router");

describe("Router", function() {

    var mockRouteTable = {
        '!blah': {
            handleMessage: function() {}
        }
    };

    it("returns a handler given a command", function() {
        var handler = router.getHandler('!blah', mockRouteTable);
        chai.assert(handler !== undefined);
    });

    it("given a specific route returns the appropriate handler", function() {
        var handler = router.getHandler('!blah', mockRouteTable);
        chai.expect(handler).to.be.a('function');
    });

    it("returns undefined for a handler if the route is undefined", function() {
        var handler = router.getHandler('!notACommand', mockRouteTable);
        chai.assert(handler === undefined);
    });

});