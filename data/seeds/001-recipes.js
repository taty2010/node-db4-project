
exports.seed = function(knex, Promise) {
      return knex('recipes').insert([
        {recipe_name: 'Carrot Cake', recipe_desc: 'Best Carrot Cake recipe'},
        {recipe_name: 'German Chocolate Cake', recipe_desc: 'German Chocolate Cake covered in coconut icing'},
        {recipe_name: 'Red Velvet Cake', recipe_desc: 'Traditional Red Velvet Cake'}
      ]);
};
