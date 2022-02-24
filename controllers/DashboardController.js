const Client = require('../models/Client');
const Admin = require('../models/Admin');

//get client
exports.client = async (req, res, next) => {

    const client = await Client.findOne({ email: { $eq: req.user.email} });
    await res.status(200).json({ client });  
}

//get admin
exports.admin = async (req, res, next) => {

    const admin = await Admin.findOne({ email: { $eq: req.user.email} });
    await res.status(200).json({ admin });
 
}