const { productService } = require('../service');

const get = async (_req, res) => {
  const products = await productService.get();

  res.status(200).json(products);
};

module.exports = {
    get,
};