var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req,res) {
  // json veya www.urlformencoded.
    console.log('req.body', req.body);
});

module.exports = router;
