// Fichier de connexion à la base de données
const { Pool } = require('pg');
const pool = new Pool();

module.exports = pool;