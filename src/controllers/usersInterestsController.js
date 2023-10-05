const usersInterestsModel = require('../models/usersInterestsModel');

const getUserInterest = async (req, res) => {
    const { id } = req.params;
    const baseline = await usersInterestsModel.getUserInterest(id); 
    return res.status(200).json(baseline);
}; 

const insertUserInterest = async (req, res) =>{
    const baseline = await usersInterestsModel.insertUserInterest(req.body); 
    return res.status(201).json(baseline);

};

module.exports = { 
    getUserInterest,
    insertUserInterest
};