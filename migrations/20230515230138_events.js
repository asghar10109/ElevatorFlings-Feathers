export async function up(knex) {
  await knex.schema.createTable('events', (table) => {
    table.increments('id')
    table.string('title')
    table.string('sub_title')
    table.string('description')
    table.integer('property_id').unsigned()
    table.foreign('property_id').references('id').inTable('properties').onDelete('CASCADE').onUpdate('CASCADE')
    table.string('time')
    table.enu('status', ['public', 'private']).defaultTo('public')
    table.integer('event_category_id').unsigned()
    table.foreign('event_category_id').references('id').inTable('eventcategories').onDelete('CASCADE').onUpdate('CASCADE')
    table.timestamps(true, true);
  })
}

export async function down(knex) {
  await knex.schema.dropTable('events')
}
