const { saleService } = require('../service');
const { decodeToken } = require('../utils/jwtGenerator');

const createSale = async (req, res) => {
    const { body } = req;

    const saleId = await saleService.createSale(body);

    res.status(201).json({ saleId });
};

const get = async (req, res) => {
    const { authorization } = req.headers;
    const { id } = decodeToken(authorization);
    const sales = await saleService.get(id);

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
