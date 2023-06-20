export async function up(knex) {
  await knex.schema.createTable('messages', (table) => {
    table.increments('id')
    table.integer('conversation_id').unsigned()
    table.foreign('conversation_id').references('id').inTable('conversations').onDelete('CASCADE').onUpdate('CASCADE')
    table.integer("sender_id")
    table.integer("receiver_id")
    table.string("message")
    table.enu('message_type', ['text', 'image']).defaultTo('image')
    table.timestamps(true, true);

  })
}

export async function down(knex) {
  await knex.schema.dropTable('messages')
}
