const {categoryDatamapper} = require("../model");
const debug = require('debug')('controller:category');

const categoryController = {
  async getAllCategories(_,res,next){
    // Je récupère toutes les catégories en BDD
    const {error,categories} = await categoryDatamapper.findAll();

    if(error){
      // Si j'ai une erreur, je la remonte
      next(error);
    } else {
      // Sinon, je remonte les catégories
      res.json(categories);
    }
  },
  async addCategory(req, res, next) {
    try {
        const category = await categoryDatamapper.add(req.body);
        res.json(category);
    } catch (err) {
        // Vérifier si `err` est bien défini et a une propriété `error`
        if (err && err.error) {
            next(err.error);
        } else {
            // Si `err` n'est pas l'objet attendu, passez l'erreur complète
            next(err);
        }
    }
},
  async getCategoryById(req,res){
      // Je récupère une catégorie par son id en BDD
      const categories = await categoryDatamapper.findById(req.params.id);
  
      res.json(category);
  },
  async updateCategory(req,res){
    debug(req_body);

    // updateCategory renvoie la catégorie modifiée en BDD (avec son id)
    const category = await categoryDatamapper.update(req.params.id, req.body);

    res.json(category);
  },
  async deleteCategory(){
    await categoryDatamapper.delete(req.params.id);

    res.json(true);
  }
};

module.exports = categoryController;