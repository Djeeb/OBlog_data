const pool = require('../service/dbClient');

const categoryDatamapper = {
  async findAll(){
    const sqlQuery="SELECT * FROM category";
    
    let categories;
    let error;
    try{
      const response = await pool.query(sqlQuery);

      categories = response.rows;
    }
    catch(err){
      error = err;
    }

    // S'il y a une erreur, les catégories seront vides (undefined)
    // Si aucune erreur, alors je remonte des catégories
    return (error,categories);
  },
  async add(category){},
  async findById(id){},
  async update(id,category){},
  async delete(id){}
};

module.exports = categoryDatamapper;