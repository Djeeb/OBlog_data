const {postDatamapper} = require("../model");
const debug = require('debug')('controller:post');

const postController = {
  async getAllPosts(_,res){
    const posts = await postDatamapper.findAll();

    res.json(Posts);
  },
  async addPost(req,res){
    debug(req_body);
    // addPost renvoie la catégorie ajoutée en BDD (avec son id)
    const post = await postDatamapper.add(req.body);

    res.json(post);
  },
  async getPostById(req,res){
      // Je récupère un post par son id en BDD
      const posts = await postDatamapper.findById(req.params.id);
  
      res.json(post);
  },
  async updatePost(req,res){
    debug(req_body);

    // updatePost renvoie la catégorie modifiée en BDD (avec son id)
    const post = await postDatamapper.update(req.params.id, req.body);

    res.json(post);
  },
  async deletePost(){
    await postDatamapper.delete(req.params.id);

    res.json(true);
  },
  getAllPostsByCategory(){}
};

module.exports = postController;