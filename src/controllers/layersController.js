const layersModel = require('../models/layersModel');

const getLayers = async (req, res) => {
    const { id_intermediary } = req.params;
    const layers = await layersModel.getLayers(id_intermediary); 
    return res.status(200).json(layers);
}; 

const insertLayers = async (req, res) =>{
    const layers = await layersModel.insertLayers(req.body); 
    return res.status(201).json(layers);

};

module.exports = { 
    getLayers,
    insertLayers
};