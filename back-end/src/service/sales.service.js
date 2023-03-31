const { Sale } = require('../database/models');

const createSale = async (body) => {
    const {
        userId,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
    } = body;
    const sellerId = 2;
    const newSale = await Sale.create({ 
        userId,
        sellerId,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
    });

    return newSale;
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