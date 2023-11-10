const { categoryController } = require('../controller');
const express = require('express');
const router = express.Router();

router.get('/', categoryController.getAllCategories);
router.post('/', categoryController.addCategory);

router.get('/:id', categoryController.getCategoryById);
router.patch('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;