
exports.seed = function(knex, Promise) {
      return knex('ingredients').insert([
        {id: 1, ingredient: 'Grated Carrots', quantity: 3, Measurement: 'Cups' },
        {id: 2, ingredient: 'Pecans', quantity: 1.5, Measurement: 'Cups'},
        {id: 3, ingredient: 'Butter', quantity: 8, Measurement: 'oz'},
        {id: 4, ingredient: 'Eggs', quantity: 4, Measurement: 'Amount'},
        {id: 5, ingredient: 'Cream Cheese', quantity: 8, Measurement: 'oz'},
      ]);
};
