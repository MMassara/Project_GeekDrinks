const express = require('express');

const app = express();
const routes = require('../routes');

app.use(express.json());
app.get('/coffee', (_req, res) => res.status(418).end());
app.use(routes.loginRouter);

module.exports = app;
