
exports.up = function(knex) {
  return(
    knex.schema
      .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('recipe_name', 128).notNullable();
        tbl.string('recipe_desc', 255);
      })
      .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('ingredient', 128).notNullable();
        tbl.float('quantity').notNullable();
        tbl.string('Measurement', 128).notNullable
      })
      .createTable('steps', tbl => {
        tbl.increments();
        tbl.string('instructions', 255).notNullable();
        tbl.integer('step_number').unsigned().notNullable();
        tbl.integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('recipes')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      })
      .createTable('recipe_list', tbl => {
        tbl.integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('recipes')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        tbl.integer('ingredient_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('ingredients')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        tbl.primary(['recipe_id', 'ingredient_id']);
      })
  )
};

exports.down = function(knex) {
  return(
    knex.schema
      .dropTableIfExists('recipe_list')
      .dropTableIfExists('steps')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('recipes')
    )
};
