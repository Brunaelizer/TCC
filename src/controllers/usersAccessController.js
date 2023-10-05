const usersaccessModel = require('../models/usersAccessModel');

const getUserAccess = async (req, res) => {
    const { identifier } = req.params;
    const users = await usersaccessModel.getUserAccess(identifier); 
    return res.status(200).json(users);
}; 

const getUserLastAccess = async (req, res) => {
    const { identifier } = req.params;
    console.log(identifier);
    const users = await usersaccessModel.getUserLastAccess(identifier); 
    return res.status(200).json(users);
}; 

const insertUserAccess = async (req, res) =>{
    const user = await usersaccessModel.insertUserAccess(req.body); 
    return res.status(201).json(result);
};

module.exports = {
    getUserAccess,
    insertUserAccess,
    getUserLastAccess
};