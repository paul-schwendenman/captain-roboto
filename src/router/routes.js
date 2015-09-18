var dice_bot = require(baseDir() + 'src/dice_bot/dice_bot.js');
var rps_bot = require(baseDir() + 'src/rps_bot/rps_bot.js');
var xkcd_bot = require(baseDir() + 'src/xkcd_bot/xkcd_bot.js');
var eight_ball_bot = require(baseDir() + 'src/eight_ball_bot/eight_ball_bot.js');
var breakfast_bot = require(baseDir() + 'src/breakfast_bot/breakfast_bot.js');

module.exports = {
    routeTable: {
        '!breakfast': breakfast_bot,
        '!eightball': eight_ball_bot,
        '!roll': dice_bot,
        '!rps': rps_bot,
        '!xkcd': xkcd_bot
    }
};

