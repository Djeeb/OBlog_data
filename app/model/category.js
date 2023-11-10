const pool = require('../service/dbClient');

const categoryDatamapper = {
  async findAll(){
    const sqlQuery="SELECT * FROM category";
    
    const response = await pool.query(sqlQuery);

    return response.rows;
  },
  async add(category){},
  async findById(id){},
  async update(id,category){},
  async delete(id){}
};

module.exports = categoryDatamapper;