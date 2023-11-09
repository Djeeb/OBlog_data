const {Client} = require('pg');
const client = new Client();
client.connect();

const categories = require('../../data/categories.json');
const posts = require('../../data/posts.json');

const categoriesDB = [];
async function importCategories(){
  console.log('Début de l\'import des catégories');

  // Je boucle sur mes catégories et je les importe une à une dans PostgreSQL
  for (const category of categories){
    const sqlQuery = `
    INSERT INTO public.category
      (label, route)
    VALUES 
      ($1, $2)
    RETURNING id,label;`;
    const values = [category.label, category.route];

    const response = await client.query(sqlQuery, values);
    categoriesDB.push(response.rows[0]);
  }

  console.log('Fin de l\'import des catégories');
};

async function importPosts(){
  console.log('Début de l\'import des posts');
  // Je boucle sur mes posts et je les importe un à un dans PostgreSQL
  for (const post of posts){
    const sqlQuery = `
    INSERT INTO public.post
      (title, slug, content, excerpt, category_id)
    VALUES 
      ($1, $2, $3, $4, $5);
    `;

    const categoryId = categoriesDB.find(category => category.label === post.category).id;
    const values = [post.title, post.slug, post.content, post.excerpt, categoryId ];

    await client.query(sqlQuery, values);
  }

  console.log('Fin de l\'import des posts');
}

(async ()=>{
  await importCategories();
  await importPosts();
})();