const outputsShorelinesModel = require('../models/outputsShorelinesModel');

const getOutputsShorelines = async (req, res) => {
    const { id } = req.params;
    const shorelines = await outputsShorelinesModel.getOutputsShorelines(id); 
    return res.status(200).json(shorelines);
}; 

const insertOutputsShorelines = async (req, res) =>{
    const shorelines = await outputsShorelinesModel.insertOutputsShorelines(req.body); 
    return res.status(201).json(shorelines);
};

module.exports = { 
    getOutputsShorelines,
    insertOutputsShorelines
};