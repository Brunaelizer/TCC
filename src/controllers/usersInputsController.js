const usersInputsModel = require('../models/usersInputsModel');

const getUserInputs = async (req, res) => {
    const { id } = req.params;
    const input = await usersInputsModel.getUserInputs(id); 
    return res.status(200).json(input);
}; 

const insertUserInputs = async (req, res) =>{
    const input = await usersInputsModel.insertUserInputs(req.body); 
    return res.status(201).json(input);
};

module.exports = {
    getUserInputs,
    insertUserInputs
};