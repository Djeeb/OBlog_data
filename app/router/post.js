const {postController} = require('../controller');
const express = require('express');
const router = express.Router();

router.get('/', postController.getAllPosts);
router.post('/', postController.addPost);

router.get('/:id', postController.getPostById);
router.patch('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

router.get('/posts/category/:id', postController.getAllPostsByCategory);

module.exports = router;