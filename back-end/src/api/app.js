const express = require('express');
const { userController } = require('../controller');

const app = express();
const routes = require('../routes');

app.use(express.json());
app.use(routes.loginRouter);
app.get('/coffee', (_req, res) => res.status(418).end());
app.post('/register', userController.create);

module.exports = app;
