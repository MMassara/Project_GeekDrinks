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

const getById = async (req, res) => {
    const { id } = req.params;

    const sale = await saleService.getById(id);
    
    if (sale === null) {
        res.status(404).json({ message: 'Not found' });
    }

    res.status(200).json(sale);
};

module.exports = {
    createSale,
    get,
    getById,
};