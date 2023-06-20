export async function up(knex) {
  await knex.schema.createTable('notifications', (table) => {
    table.increments('id')
    table.integer('user_id').unsigned()
    table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
    table.string('title')
    table.string('message')
    table.timestamps(true, true);
  })
}

export async function down(knex) {
  await knex.schema.dropTable('notifications')
}
