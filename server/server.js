require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controller');

const { SERVER_PORT, CONNECTION_STRING } = process.env;

const app = express();

app.use(bodyParser.json());

// ENDPOINTS //





app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} ducks in the pond!`))