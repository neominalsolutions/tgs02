var express = require('express');
const { body, validationResult } = require('express-validator');
const userValidation = require('../validations/user.validation');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('userForm', {title:'User Form'});
});

// users/info (serverside post)
router.post('/', userValidation, function (req,res) {

   const valRes = validationResult(req);
   console.log('valRes', valRes);

   if(!valRes.isEmpty()){ // validayondan geçilemez ise
    res.render('userForm', {errors: valRes.errors, formData: req.body })
   } else {
    res.render('userForm',{title:'User Form'})
   }
  
});

// /users/json (clientside post)
router.post('/json', (req,res) => {
  // json formatında gelen bilgiyi geri döndür.
  console.log('req.body', req.body);
   res.json(req.body);
})

module.exports = router;
