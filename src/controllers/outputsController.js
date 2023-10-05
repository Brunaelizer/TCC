const outputsModel = require('../models/outputsModel');

const getOutputs = async (req, res) => {
    const { id } = req.params;
    const input = await outputsModel.getOutputs(id); 
    return res.status(200).json(input);
}; 

const insertOutputs = async (req, res) =>{
    const input = await outputsModel.insertOutputs(req.body); 
    return res.status(201).json(input);
};

module.exports = { 
    getOutputs,
    insertOutputs
};