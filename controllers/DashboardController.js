const Client = require('../models/Client');

//Show all clients
exports.index = async (req, res, next) => {

    const client = await Client.findOne({ email: { $eq: req.user.email} });
    await res.status(200).json({ client });
    
}