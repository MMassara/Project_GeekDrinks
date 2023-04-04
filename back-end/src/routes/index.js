const loginRouter = require('./login.routes');
const registerRouter = require('./register.routes');
const productRouter = require('./product.routes');
const saleRouter = require('./sale.routes');
const orderRouter = require('./order.routes');
const admRouter = require('./adm.routes');

module.exports = {
    loginRouter,
    registerRouter,
    productRouter,
    saleRouter,
    orderRouter,
    admRouter,
};
