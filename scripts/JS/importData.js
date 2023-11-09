const {Client} = require('pg');
const client = new Client();
client.connect();

const categories = require('../../data/categories.json');
const posts = require('../../data/posts.json');

async function importCategories(){
  console.log('Début de l\'import des catégories');
  // Je boucle sur mes catégories et je les importe une à une dans PostgreSQL
  for (const category of categories){
    const sqlQuery = `
    INSERT INTO public.category
      (label, route)
    VALUES 
      ($1, $2);
    `;
    const values = [category.label, category.route];

    await client.query(sqlQuery, values);
  }

  console.log('Fin de l\'import des catégories');
};

(async ()=>{
  await importCategories();
})();