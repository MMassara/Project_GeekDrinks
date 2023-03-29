const express = require('express');
const { userController } = require('../controller');

const app = express();

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.post('/register', userController.create);

module.exports = app;
