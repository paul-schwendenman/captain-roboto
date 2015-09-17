module.exports = {
    handleMessage: handleMessage,
    rollDice: rollDice
};

function rollDice(fn) {
    return Math.floor((fn() * 6) + 1).toString();
}

function handleMessage() {
    return rollDice(Math.random);
}