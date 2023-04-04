const { orderService } = require('../service');

const findSalesById = async (req, res) => {
  const { status, message } = await orderService.findSalesById(req.params.id);
  return res.status(status).json(message);
};

module.exports = {
  findSalesById,
};
