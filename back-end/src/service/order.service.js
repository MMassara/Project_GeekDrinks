const { SalesProduct, Product, Sale } = require('../database/models');

const findSalesById = async (saleId) => {
  const data = await SalesProduct.findAll({ where: { saleId } });
  if (!data) return { status: 400, message: 'Cannot find sale' };
  const products = await Promise.all(data.map(async ({ productId, quantity }) => {
    const { dataValues } = await Product.findOne({ where: { id: productId } });
    const allProducts = { ...dataValues, quantity };
    return allProducts;
  }));
  const { dataValues } = await Sale.findOne({ where: +saleId });
  return { status: 200, message: { items: products, ...dataValues } };
};

async function changeStatus({ status, id }) {
  const updated = await Sale.update({ status }, { where: { id } });
  return updated;
}

module.exports = { findSalesById, changeStatus };
