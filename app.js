// app.js
const express = require('express');
const app = express();
const config = require('./config');

app.use(express.static('public'));
app.use(express.json());
app.use('/api/jokes', require('./routes/jokes'));
app.use('/api/othersites', require('./routes/othersites'));
app.use('/api/otherjokes', require('./routes/otherjokes'));

const port = process.env.PORT || config.localPort; // Heroku
app.listen(port);
console.log('Listening on port ' + port + ' ...');

module.exports = app; // test