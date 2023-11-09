# Ce fichier ne contient que des instructions que j'aurais pu taper dans le terminal
## Pour l'exécuter, il faut taper dans le terminal: bash ./init.sh

# Connexion en tant que postgres
export PGUSER=postgres

# J'efface l'existant
dropdb oblog
dropuser admin_oblog

# Création du rôle
createuser admin_oblog -P

# Création de la base de données
createdb oblog -O admin_oblog

# Connexion en tant que admin_oblog
export PGUSER=admin_oblog
# Connexion à la base de données
export PGDATABASE=oblog

# Exécuter le script de création des tables
psql -f ./scripts/SQL/create_tables.sql