
exports.seed = function(knex, Promise) {
      return knex('steps').insert([
        {id: 1, step_number: 1, instructions: "Preheat the oven at 350º Fahrenheit (180º C / gas mark 4)", recipe_id: 1},
        {id: 2, step_number: 2, instructions: 'Mix the dry ingredients in to a large bowl.', recipe_id: 1},
        {id: 3, step_number: 3, instructions: 'In another bowl, mix the wet ingredients.', recipe_id: 1},
        {id: 4, step_number: 4, instructions: 'Pour the egg mixture in the bowl with the flour.', recipe_id: 1},
        {id: 5, step_number: 5, instructions: 'Add the grated carrot and stir.', recipe_id: 1},
        {id: 6, step_number: 6, instructions: 'Pour the cake mix in.', recipe_id: 1},
        {id: 7, step_number: 7, instructions: 'Put the cake tin in the middle of the oven and let it bake for 35-40 minutes.', recipe_id: 1},
        {id: 8, step_number: 1, instructions: "Preheat oven to 350 degrees F (175 degrees C). Grease and flour 3 8-inch cake pans ", recipe_id: 2},
        {id: 9, step_number: 2, instructions: 'Place the chunks of chocolate into the boiling water and stir until the chocolate has melted; set aside to cool', recipe_id: 2},
        {id: 10, step_number: 3, instructions: 'In a large bowl, beat 1 cup of softened margarine with 2 cups of sugar with an electric mixer until light and fluffy. ', recipe_id: 2},
        
      ]);
};
