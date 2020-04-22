const db = require('../data/dbConfig');

module.exports = {
  getRecipes,
  getRecipesById,
  getShoppingListById
}

function getRecipes(){
  return db('recipes')
}

function getRecipesById(id){
  return db('recipes')
    .where({id})
    .first()
}

function getShoppingListById(id){
  return db('recipes as r')
    .join('recipe_list as rl','rl.recipe_id','r.id')
    .join('ingredients as i', 'i.id', '=', 'rl.ingredient_id' )
    .select('r.recipe_name', 'i.ingredient', 'i.quantity' )
    .where({recipe_id: id})
}