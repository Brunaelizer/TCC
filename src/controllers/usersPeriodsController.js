const usersPeriodsModel = require('../models/usersPeriodsModel');

const getUserPeriods = async (req, res) => {
    const { id } = req.params;
    const periods = await usersPeriodsModel.getUserPeriods(id); 
    return res.status(200).json(periods);
}; 

const insertUserPeriods = async (req, res) =>{
    const periods = await usersPeriodsModel.insertUserPeriods(req.body); 
    return res.status(201).json(periods);

};

module.exports = { 
    getUserPeriods,
    insertUserPeriods
};