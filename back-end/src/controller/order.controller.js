const { orderService } = require('../service');

const findSalesById = async (req, res) => {
  const { status, message } = await orderService.findSalesById(req.params.id);
  return res.status(status).json(message);
};

const changeStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;
    const data = await orderService.changeStatus({ status, id });
    return res.status(201).json({ data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  findSalesById,
  changeStatus,
};
