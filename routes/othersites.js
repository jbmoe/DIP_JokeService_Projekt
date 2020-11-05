// jokes.js
const controller = require("../controller/controller");
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

router

    .get('/', async (request, response) => {
        try {
            let result = await get("https://krdo-joke-registry.herokuapp.com/api/services")
            response.send(result)
        } catch (e) {
            sendStatus(e, response);
        }
    })

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