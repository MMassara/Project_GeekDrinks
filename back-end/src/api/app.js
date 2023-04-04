const express = require('express');
const cors = require('cors');

const app = express();
const routes = require('../routes');

app.use(express.json());
app.use(express.static(`${__dirname}/../../public`));
app.use(cors());

app.use(routes.loginRouter);
app.use(routes.registerRouter);
app.use(routes.productRouter);
app.use(routes.saleRouter);
app.use(routes.orderRouter);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
