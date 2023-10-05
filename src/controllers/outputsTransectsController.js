const outputsTransectsModel = require('../models/outputsTransectsModel');

const getOutputsTransects = async (req, res) => {
    const { id_output } = req.params;
    const transect = await outputsTransectsModel.getOutputsTransects(id_output); 
    return res.status(200).json(transect);
}; 

const insertOutputsTransects = async (req, res) =>{
    const transect = await outputsTransectsModel.insertOutputsTransects(req.body); 
    return res.status(201).json(transect);
};

module.exports = { 
    getOutputsTransects,
    insertOutputsTransects
};