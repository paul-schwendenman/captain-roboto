module.exports = {
    handleMessage: handleMessage,
    noArgumentMessage: 'Hey!  Please add an argument!  Rock, paper, or scissors?',
    wrongArgumentMessage: 'ROCK. PAPER. OR SCISSORS.  NOT THAT HARD.'
};

function handleMessage(message) {
    var tokens = message.text.split(' ', 2);
    if (tokens.length > 1) {
        var argument = tokens[1],
            found = ['rock', 'paper', 'scissors'].indexOf(argument.toLowerCase());
        if (found < 0) {
            return this.wrongArgumentMessage;
        }
    }
    return this.noArgumentMessage;
}


