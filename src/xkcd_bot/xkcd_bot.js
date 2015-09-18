'use strict';

var http = require('http');
var q = require('q');

module.exports = {
    handleMessage: handleMessage,
    getMostRecentComicJson: getMostRecentComicJson
};

function handleMessage() {

    var deferred = q.defer();

    getMostRecentComicJson()
        .then(function (response) {

            deferred.resolve(response.img);
        });

    return deferred.promise;
}

function getMostRecentComicJson() {

    var deferred = q.defer();

    http.get('http://xkcd.com/info.0.json', function (response) {
        response.on('data', function (body) {
            var json = JSON.parse(body);
            deferred.resolve(json);
        })
    });

    return deferred.promise;
}
