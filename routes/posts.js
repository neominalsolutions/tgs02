const express = require('express');
const postsController = require('../controllers/posts.controller');
const { postsCreateValidation, postsUpdateValidation } = require('../validations/posts.validation');
const router = express.Router();

// ana route /posts app.js doosyasında

router.get('/', postsController.get);
router.get('/:id', postsController.getById);
router.get('/:id/comments', postsController.getPostComments) // /posts/1/comments
router.post('/', postsCreateValidation, postsController.post);
router.put('/:id',postsUpdateValidation, postsController.put);
router.delete('/:id', postsController.deleteById);


module.exports = router;