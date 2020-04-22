const db = require('../data/dbConfig');

module.exports = {
  getShoppingList,
}

function getShoppingList(){
  return db('recipe_list')
}

// function getShoppingListById(recipe_id){
//   return db('recipe_list as rl')
//     .join('recipes as r', 'r.id', '=', 'rl.recipe_id', 'ingredients as i', 'i.id', '=', 'rl.ingredient')
//     .select('i.ingredient', 'i.quantity')
// }