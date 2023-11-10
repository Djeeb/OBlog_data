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
  /**
   * Met à jour une catégorie en BDD
   * @param {*} category 
   * @returns la catégorie mise à jour
   */
  async add(category){
    const sqlQuery=`
      INSERT INTO category 
        (label,route) 
      VALUES 
        ($1,$2) 
      RETURNING *";`;
    const values = [category.label,category.route];

    let categoryDB;
    let error;
    try{
      const response = await pool.query(sqlQuery);

      categoryDB = response.rows[0];
    }
    catch(err){
      error = err;
    }

    // S'il y a une erreur, les catégories seront vides (undefined)
    // Si aucune erreur, alors je remonte des catégories
    return (error,categoryDB);
  },
  async findById(id){},
  async update(id,category){},
  async delete(id){}
};

module.exports = categoryDatamapper;