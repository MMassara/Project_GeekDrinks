const { saleService } = require('../service');

const createSale = async (req, res) => {
    const { body } = req;

    const create = saleService.createSale(body);

    res.status(201).json(create);
};

const get = async (_req, res) => {
    const sales = await saleService.get();
    console.log(sales);

    res.status(200).json(sales);
};

module.exports = {
    createSale,
    get,
};