const usersBaselinesModel = require('../models/usersBaselinesModel');

const getUserBaselines = async (req, res) => {
    const { id } = req.params;
    const baseline = await usersBaselinesModel.getUserBaselines(id); 
    return res.status(200).json(baseline);
}; 

const insertUserBaselines = async (req, res) =>{
    const baseline = await usersBaselinesModel.insertUserBaselines(req.body); 
    return res.status(201).json(baseline);

};

module.exports = { 
    getUserBaselines,
    insertUserBaselines
};