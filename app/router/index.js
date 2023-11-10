const categoryRouter = require('./category');
const postRouter = require('./post');

const errorHandler = require("../service/error/errorHandler");

const express = require('express');
const router = express.Router();

// Utiliser une url dans le .use() permet de définir que l'url doit être préfixée par ce qui est passé en paramètre
router.use('/categories', categoryRouter);
router.use('/posts', postRouter);

// Gestion d'erreur
router.use(errorHandler);

module.exports = router;