const { body } = require("express-validator");

const userValidation = [
  body('firstname')
  .notEmpty()
  .withMessage('firstname boş geçilemez')
  .isString()
  .withMessage('string tipinde tanımlanmalıdır')
  ,
  body('lastname')
  .notEmpty()
  .withMessage('lastname boş geçilemez')
  .isLength(20)
  .withMessage('en az 20 karakter olmalıdır')
]

module.exports = userValidation;

