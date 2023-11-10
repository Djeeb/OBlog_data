const categoryController = require('./categoryController');
const postController = require('./postController');
const express = require('express');
const router = express.Router();



module.exports = {
  categoryController,
  postController,
  router
};