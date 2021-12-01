var express = require('express');
//const { index } = require('../controllers/main');
var router = express.Router();
const controller = require ('../controllers/main')
router.get('/', controller.index)
module.exports = router;
