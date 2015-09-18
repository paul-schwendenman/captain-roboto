'use strict';

var http = require('http');
var q = require('q');

module.exports = {
    handleMessage: handleMessage,
    getMostRecentComicJson: getMostRecentComicJson
};

function handleMessage() {

    var deferred = q.defer();

    http.get('http://imgs.xkcd.com/comics/secretary_part_1.png', function (resp) {

        deferred.resolve('http://imgs.xkcd.com/comics/secretary_part_1.png');
    });

    return deferred.promise;
}

function getMostRecentComicJson() {

}