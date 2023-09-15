var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('userForm', {title:'User Form'});
});

// users/info
router.post('/', function (req,res) {
  
  console.log('body', req.body);

  // res ile dönüş tipi tanımlamayı unutmuyoruz.

  res.render('userForm',{title:'User Form'})

  // res.end();

});

// /users/json
router.post('/json', (req,res) => {
  // json formatında gelen bilgiyi geri döndür.
  console.log('req.body', req.body);
   res.json(req.body);
})

module.exports = router;
