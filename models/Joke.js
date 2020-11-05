// Jokes.js
const mongoose = require('mongoose');

const joke = new mongoose.Schema({
    setup: String,
    punchline: String,
});

module.exports = mongoose.model('Joke', joke);