global.__base = __dirname + '/../';

var chai = require("chai");
var routes = require("../src/routes");

describe('Routes Table', function() {

    it('only contains valid routes', function() {
        Object.keys(routes.routeTable).forEach(function(route) {
            chai.assert(routes.routeTable[route] !== undefined);
        });
    });

});