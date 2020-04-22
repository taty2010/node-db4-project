
exports.seed = function(knex, Promise) {
      return knex('ingredients').insert([
        {id: 1, ingredient: 'Grated Carrots', quantity: 3 },
        {id: 2, ingredient: 'Pecans', quantity: 1.5},
        {id: 3, ingredient: 'Butter', quantity: 8},
        {id: 4, ingredient: 'Eggs', quantity: 4},
        {id: 5, ingredient: 'Cream Cheese', quantity: 1},
      ]);
};
