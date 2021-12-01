// var express = require('express');
// var router = express.Router();


// const tripscontroller = require ('../controllers/trips');

// router
//     .route('/trips')
//     .get(tripscontroller.tripList);

// module.exports = router;

const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

router
    .route('/trips')
    .get(tripsController.tripsList);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);
  
module.exports = router;