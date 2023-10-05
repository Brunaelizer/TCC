const generatedImagesModel = require('../models/generatedImagesModel');

const getGeneratedImages = async (req, res) => {
    const { id_input } = req.params;
    const images = await generatedImagesModel.getGeneratedImages(id_input); 
    return res.status(200).json(images);
}; 

const insertGeneratedImages = async (req, res) =>{
    const images = await generatedImagesModel.insertGeneratedImages(req.body); 
    return res.status(201).json(images);
};

module.exports = { 
    getGeneratedImages,
    insertGeneratedImages
};