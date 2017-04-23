const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const database = require('./config/database');

const app = express();

const configureExpress = () => {
    app.use(bodyParser.json());
    app.use('/', routes);

    return app;
};

module.exports = () => database.connect().then(configureExpress);
