const Sequelize = require('sequelize');
const config = require('../database/config/config');
const { Sale, SalesProduct, User } = require('../database/models');

const env = 'development';
const sequelize = new Sequelize(config[env]);

const createSale = async (body) => {
    const t = await sequelize.transaction();
    try {
    const sellerId = 2;
    const { dataValues } = await Sale.create({ userId: body.userId, 
        sellerId,
        totalPrice: body.totalPrice,
        deliveryAddress: body.deliveryAddress,
        deliveryNumber: body.deliveryNumber }, { transaction: t });
    Promise.all(body.products.map((product) => SalesProduct
    .create({ quantity: product.quantity, saleId: dataValues.id, productId: product.productId })));
    await t.commit();
    return dataValues.id;
    } catch (err) {
        await t.rollback();
        console.log(err);
        throw err;
    }
};

const get = async (userId) => {
  const dataValues = await User.findAll({ where: { id: userId } });
  if (dataValues[0].role === 'seller') {
    const result = await Sale.findAll();
    return result;
  }
  const result = await Sale.findAll({ where: { userId } });
  return result;
};

const getById = async (id) => {
  const result = await Sale.findOne({ where: +id });

  return result;
};

module.exports = {
  createSale,
  get,
  getById,
};
