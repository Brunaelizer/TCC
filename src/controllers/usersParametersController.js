const usersParametersModel = require('../models/usersParametersModel');

const getUserParameters = async (req, res) => {
    const { id } = req.params;
    const parameters = await usersParametersModel.getUserParameters(id); 
    return res.status(200).json(parameters);
}; 

const insertUserParameters = async (req, res) =>{
    const parameters = await usersParametersModel.insertUserParameters(req.body); 
    return res.status(201).json(parameters);

};

module.exports = { 
    getUserParameters,
    insertUserParameters
};