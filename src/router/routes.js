var dice_bot = require(baseDir() + 'src/dice_bot/dice_bot.js');
var rps_bot = require(baseDir() + 'src/rps_bot/rps_bot.js');

module.exports = {
    routeTable: {
        '!roll': dice_bot,
        '!rps': rps_bot
    }
};

