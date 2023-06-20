
 export async function up(knex) {
    await knex.schema.createTable('conversations', table => {
        table.increments('id');
        table.integer('conversational_id');
        table.integer('sender_id');
        table.integer('receiver_id');
        table.timestamps(true, true);
    });
}

 export async function down(knex) {
    await knex.schema.dropTable('conversations');
}
