const intermediaryModel = require('../models/intermediaryModel');

const getIntermediary = async (req, res) => {
    const { id } = req.params;
    const intermediary = await intermediaryModel.getIntermediary(id); 
    return res.status(200).json(intermediary);
}; 

const insertIntermediary = async (req, res) =>{
    const intermediary = await intermediaryModel.insertIntermediary(req.body); 
    return res.status(201).json(intermediary);

};

module.exports = { 
    getIntermediary,
    insertIntermediary
};