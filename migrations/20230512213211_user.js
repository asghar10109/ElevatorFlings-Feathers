export async function up(knex) {
  await knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('email').unique()
    table.string('password')
    table.string('strategy')
    table.string('name')
    table.string('business_name')
    table.string('profile_image')
    table.enu('is_active', ['active', 'inactive']).defaultTo('inactive')
    table.enu('is_deleted', ['0', '1']).defaultTo('0')
    table.enu('is_blocked', ['0', '1']).defaultTo('0')
    table.string('otp')
    table.timestamps(true, true);
  })
}

export async function down(knex) {
  await knex.schema.dropTable('users')
}

export const searchQuery = async (searchTerm) => {
  // const results = await knex.schema.table('users')
  //   .select()
  //   .where('name', 'like', `%${searchTerm}%`);
  const results = await knex('users').whereLike('email', '%mail%')
  return results;
};