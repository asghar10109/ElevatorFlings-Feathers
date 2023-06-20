export async function up(knex) {
  await knex.schema.createTable('eventcategories', (table) => {
    table.increments('id')
    table.string('title')
    table.string('description')
    table.timestamps(true, true);

  })
}

export async function down(knex) {
  await knex.schema.dropTable('eventcategories')
}
