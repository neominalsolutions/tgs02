const { body } = require("express-validator");

const  postsCreateValidation = [
  body('title').notEmpty().isLowercase(),
  body('body').notEmpty().isLength(10)
]

const postsUpdateValidation = [
  body('title')
  .notEmpty()
  .withMessage(),
]

module.exports = {postsCreateValidation, postsUpdateValidation};