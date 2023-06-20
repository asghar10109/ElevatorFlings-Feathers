export async function up(knex) {
  await knex.schema.createTable('properties', (table) => {
    table.increments('id')
    table.string('name')
    table.string('image')
    table.string('location')
    table.string('address')
    table.string('description')
    table.string('capacity')
    table.timestamps(true, true);
  })
}

export async function down(knex) {
  await knex.schema.dropTable('properties')
}
