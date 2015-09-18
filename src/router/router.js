'use strict';

module.exports = {
    getHandler: getHandler
};

function getHandler(command, routeTable) {
    var bot = routeTable[command];
    if(bot === undefined) {
        return undefined;
    }
    return bot.handleMessage;
}
