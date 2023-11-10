const {categoryDatamapper} = require("../model");
const debug = require('debug')('controller:category');

const categoryController = {
  async getAllCategories(_,res){
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
  async addCategory(req,res){
    debug(req_body);
    // addCategory renvoie la catégorie ajoutée en BDD (avec son id)
    const category = await categoryDatamapper.add(req.body);

    res.json(category);
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