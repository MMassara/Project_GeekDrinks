const { Product } = require('../database/models');

const get = async () => {
  const products = await Product.findAll();

  return products;
};

module.exports = {
    get,
};