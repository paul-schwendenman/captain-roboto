var dice_bot = require(baseDir() + 'src/dice_bot/dice_bot.js');
var rps_bot = require(baseDir() + 'src/rps_bot/rps_bot.js');
var eight_ball_bot = require(baseDir() + 'src/eight_ball_bot/eight_ball_bot.js');

module.exports = {
    routeTable: {
        '!eightball': eight_ball_bot,
        '!roll': dice_bot,
        '!rps': rps_bot
    }
};

