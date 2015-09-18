module.exports = {
    generateResponse: generateResponse
};

function generateResponse(options, randomFn) {
    randomFn = randomFn || Math.random;

    return options[Math.floor((randomFn() * options.length))];
}
