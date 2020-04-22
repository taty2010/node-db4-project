
exports.seed = function(knex, Promise) {
      return knex('ingredients').insert([
        {ingredient: 'Grated Carrots', quantity: 3 },
        {ingredient: 'Pecans', quantity: 1.5},
        {ingredient: 'Butter', quantity: 8},
        {ingredient: 'Eggs', quantity: 4},
        {ingredient: 'Cream Cheese', quantity: 1},
      ]);
};
