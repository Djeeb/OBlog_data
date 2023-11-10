/***************************************/
/*** Fichier de lancement du serveur ***/
/***************************************/
require("dotenv").config();

const express = require("express");

const app = express();

// const routers = require("./app/router/index.js");
const {categoryRouter, postRouter} = require("./app/router");

// Utiliser une url dans le .use() permet de définir que l'url doit être préfixée par ce qui est passé en paramètre
app.use('/categories', categoryRouter);
app.use('/posts', postRouter);

const PORT = process.env.PORT ?? 3000;

// je lance l'écoute de mon serveur
app.listen(PORT,()=>{
    console.log("Serveur démarré...");
});