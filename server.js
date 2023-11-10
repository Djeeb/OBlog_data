/***************************************/
/*** Fichier de lancement du serveur ***/
/***************************************/
require("dotenv").config();

const express = require("express");

const app = express();

// autorise la réception de données au format (Content-type) JSON
app.use(express.json());

const PORT = process.env.PORT ?? 3000;

// je lance l'écoute de mon serveur
app.listen(PORT,()=>{
    console.log("Serveur démarré...");
});