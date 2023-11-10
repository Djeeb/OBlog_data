/***************************************/
/*** Fichier de lancement du serveur ***/
/***************************************/
require("dotenv").config();

const express = require("express");

const app = express();

// Autorise la réception de données au format (Content-type) JSON
app.use(express.json());

// const routers = require("./app/router/index.js");
const router = require("./app/router");
app.use(router);

const PORT = process.env.PORT ?? 4000;

// je lance l'écoute de mon serveur
app.listen(PORT,()=>{
    console.log("Serveur démarré...");
});