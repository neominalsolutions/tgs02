var express = require('express');
const homeController = require('../controllers/home.controller');
var router = express.Router();

// ara işlem varsa yazım şekli
// router.get('/', (req,res) => {
//   // request loglama işlemi
//   homeController.get(req,res);

// });

router.get('/', homeController.get);

router.post('/', homeController.post);

module.exports = router;
