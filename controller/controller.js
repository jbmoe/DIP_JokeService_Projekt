// controller.js
const mongoose = require('mongoose');
const Joke = require('../models/Joke');
const config = require('../config');

mongoose.connect(config.databaseURI, {useNewUrlParser: true, useUnifiedTopology: true});

exports.createJoke = function (setup, punchline) {
    return Joke.create({
        setup,
        punchline
    });
};

exports.getJoke = function (jokeId) {
    return Joke.findById(jokeId).exec();
};

exports.getJokes = function () {
    return Joke.find().populate('joke').exec();
};