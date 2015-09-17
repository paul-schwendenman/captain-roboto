var dice_bot = require('../src/dice_bot.js');
var rps_bot = require('../src/rps_bot/rps_bot.js');

module.exports = {
    routeTable: {
        '!roll': dice_bot,
        '!rps': rps_bot
    }
};

