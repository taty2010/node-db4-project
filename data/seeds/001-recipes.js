
exports.seed = function(knex, Promise) {
      return knex('recipes').insert([
        {id: 1, recipe_name: 'Carrot Cake', recipe_desc: 'Best Carrot Cake recipe'},
        {id: 2, recipe_name: 'German Chocolate Cake', recipe_desc: 'German Chocolate Cake covered in coconut icing'},
        {id: 3, recipe_name: 'Red Velvet Cake', recipe_desc: 'Traditional Red Velvet Cake'}
      ]);
};
