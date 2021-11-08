var express = require('express');
//const { index } = require('../controllers/main');
var router = express.Router();
const controller = require ('../controllers/main')
router.get('/',controller.index)
module.exports = router;

//const ctrlMain = require('../controllers/main');
/* GET home page. */
//router.get('/', ctrlMain.index);

/* GET home page. */
//router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
//});



//module.exports = router;
