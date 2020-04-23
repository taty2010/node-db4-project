const db = require('../data/dbConfig');

module.exports = {
  getRecipes,
  getRecipesById,
  getShoppingList,
  getInstructions,
  addRecipe,
  update
}

function getRecipes(){
  return db('recipes')
}

function getRecipesById(id){
  return db('recipes')
    .where({id})
    .first()
}

function getShoppingList(id){
  return db('recipes as r')
    .join('recipe_list as rl','rl.recipe_id','r.id')
    .join('ingredients as i', 'i.id', '=', 'rl.ingredient_id' )
    .select('r.recipe_name', 'i.ingredient', 'i.quantity' )
    .where({recipe_id: id})
}

function getInstructions(id){
  return db('recipes as r')
    .join('steps as s','s.recipe_id','r.id')
    .select('s.step_number', 's.instructions')
    .where({recipe_id: id})
}

function addRecipe(recipe){
  return db('recipes')
    .insert(recipe)
}

function update(recipe, id){
  return db('recipes')
    .where({id})
    .update(recipe)
}