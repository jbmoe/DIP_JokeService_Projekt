// jokes.js
const controller = require("../controller/controller");
const express = require('express');
const router = express.Router();

router
    .get('/', async (request, response) => {
        try {
            let jokes = await controller.getJokes();
            response.send(jokes);
        } catch (e) {
            sendStatus(e, response);
        }
    })

    .post('/', async (request, response) => {
        try {
            let { setup, punchline } = request.body;
            await controller.createJoke(setup, punchline);

        } catch (e) {
            sendStatus(e, response);
        }
        response.sendStatus(201);
    }
    );

function sendStatus(e, response) {
    console.error("Exception: " + e);
    if (e.stack) console.error(e.stack);
    response.status(500).send(e);
}

module.exports = router;

async function createjokefunc() {
    await controller.createJoke('Alle børnene slap ud af fængslet', 'Undtaget Peter, han nåede kun 500 meter')
}

// createjokefunc() 