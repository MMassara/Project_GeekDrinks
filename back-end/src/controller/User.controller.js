const jwt = require('jsonwebtoken');
const fs = require('fs');
const { userService } = require('../service');

const JWT_SECRET = fs.readFileSync('jwt.evaluation.key', 'utf-8').trim();

const create = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const id = await userService.createUser({ name, email, password, role });
        const payload = {
        name,
        id,
    };

    const token = jwt.sign(payload, JWT_SECRET);

    return res.status(201).json({ token });
    } catch (err) {
        res.status(409).json({ message: err.message }); 
    }
};

module.exports = {
    create,
};