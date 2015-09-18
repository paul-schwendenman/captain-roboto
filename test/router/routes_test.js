
require('../test.setup');
var chai = require("chai");
var routes = require(baseDir() + "src/router/routes");

describe('Routes Table', function() {

    it('only contains valid routes', function() {
        Object.keys(routes.routeTable).forEach(function(route) {
            chai.assert(routes.routeTable[route] !== undefined);
        });
    });

});