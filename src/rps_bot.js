module.exports = {
    handleMessage: handleMessage,
    helpfulMessage: 'Hey!  Please add an argument!  Rock, paper, or scissors?'
};

function handleMessage(message) {
    return this.helpfulMessage;
}


