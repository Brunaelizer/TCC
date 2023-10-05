const express = require('express');
const usersaccessController = require('./controllers/usersAccessController');
const usersInputsController = require('./controllers/usersInputsController');
const usersPeriodsController = require('./controllers/usersPeriodsController');
const usersBaselinesController = require('./controllers/usersBaselinesController');
const usersParametersController = require('./controllers/usersParametersController');
const usersInterestsController = require('./controllers/usersInterestsController');
const intermediaryController = require('./controllers/intermediaryController');
const layersController = require('./controllers/layersController');
const outputsController = require('./controllers/outputsController');
const outputsShorelinesController = require('./controllers/outputsShorelinesController');
const outputsTransectsController = require('./controllers/outputsTransectsController');
const generatedImagesController = require('./controllers/generatedImagesController');

const router = express.Router();


//User Access
router.get('/usersaccess/:identifier', usersaccessController.getUserAccess);
router.post('/usersaccess', usersaccessController.insertUserAccess);
router.get('/usersaccess/last/:identifier', usersaccessController.getUserLastAccess);

//User inputs
router.get('/usersinputs/:id', usersInputsController.getUserInputs);
router.post('/usersinputs', usersInputsController.insertUserInputs);

//User periods
router.get('/usersperiods/:id', usersPeriodsController.getUserPeriods);
router.post('/usersperiods', usersPeriodsController.insertUserPeriods);

//User baselines
router.get('/usersbaselines/:id', usersBaselinesController.getUserBaselines);
router.post('/usersbaselines', usersBaselinesController.insertUserBaselines);

//User parameters
router.get('/usersparameters/:id', usersParametersController.getUserParameters);
router.post('/usersparameters', usersParametersController.insertUserParameters);

//User interests
router.get('/usersinterests/:id', usersInterestsController.getUserInterest);
router.post('/usersinterests', usersInterestsController.insertUserInterest);

//Intermediary
router.get('/intermediary/:id', intermediaryController.getIntermediary);
router.post('/intermediary', intermediaryController.insertIntermediary);

//Layers
router.get('/layers/:id_intermediary', layersController.getLayers);
router.post('/layers', layersController.insertLayers);

//Outputs
router.get('/outputs/:id_input', outputsController.getOutputs);
router.post('/outputs', outputsController.insertOutputs);

//Outputs Shorelines
router.get('/outputshorelines/:id_output', outputsShorelinesController.getOutputsShorelines);
router.post('/outputshorelines', outputsShorelinesController.insertOutputsShorelines);

//Outputs Shorelines
router.get('/outputtransects/:id_output', outputsTransectsController.getOutputsTransects);
router.post('/outputtransects', outputsTransectsController.insertOutputsTransects);

//Generated images
router.get('/generatedimages/:id_output', generatedImagesController.getGeneratedImages);
router.post('/generatedimages', generatedImagesController.insertGeneratedImages);


module.exports = router;