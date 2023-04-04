const { Sale, SalesProduct } = require('../database/models');

const createSale = async ({
  userId,
  totalPrice,
  deliveryAddress,
  deliveryNumber,
  products,
}) => {
  const sellerId = 2;
  const { dataValues } = await Sale.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
  });
  await Promise.all(
    products.map(async ({ productId, quantity }) => {
      const result = await SalesProduct.create({
        saleId: dataValues.id,
        productId,
        quantity,
      });
      return result;
    }),
  );
  return dataValues.id;
};

const get = async () => {
  const result = await Sale.findAll();

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
