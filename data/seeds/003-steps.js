
exports.seed = function(knex, Promise) {
      return knex('steps').insert([
        {id: 1, step: 'Gather dry ingredients', recipe_id: 1},
        {id: 2, step: 'Fold in egg whites', recipe_id: 2},
        {id: 3, step: 'Mix liquid ingredients', recipe_id: 1},
        {id: 4, step: 'heat oven to 250 degress', recipe_id: 3},
        {id: 5, step: 'Mix in dry ingredients', recipe_id: 2}
      ]);
};
