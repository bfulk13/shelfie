require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controller');
const massive = require('massive');

const { SERVER_PORT, CONNECTION_STRING } = process.env;

const app = express();

app.use(bodyParser.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} sharks circling!`));
})

// ENDPOINTS //

app.post('/api/product', ctrl.newProduct)

app.get('/api/inventory', ctrl.getAll)

app.get('/api/inventory/:id', ctrl.getOne)

app.put('/api/inventory/:id', ctrl.updateInventory)

app.delete('/api/inventory/:id', ctrl.delete)



