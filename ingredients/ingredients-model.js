const db = require('../data/dbConfig');

module.exports = {
  find,
  getRecipeIngredients,
  getIngredientsById,
  add
}

function find(){
  return db('ingredients')
}

function getIngredientsById(id){
  return db('ingredients')
    .where({id})
    .first()
}

function getRecipeIngredients(id){
  return db('ingredients as i')
    .join('recipes as r')
    .join('recipe_list as rl','rl.ingredient_id','i.id')
    .select('i.id', 'r.recipe_name')
    .where({ingredient_id: id})
}

function add(ingredient){
  return db('ingredients')
    .insert(ingredient)
}