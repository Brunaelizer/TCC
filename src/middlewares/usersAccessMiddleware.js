const validadeBody = (req, res, next) => {
    const {body} = req;

    if(body.identifier === undefined){
        return res.status(400).json({message: 'The request is not in the right format.'})
    }

    if(body.identifier === ''){
        return res.status(400).json({message: 'The request is not in the right format.'})
    }

    next()

};




module.exports = { 
    validadeBody
};

