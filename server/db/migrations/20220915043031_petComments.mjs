export const up = async (knex) => {
  return knex.schema.createTable('petComments', (table) => {
    table.increments('id')
    table.string('petId').references('id').inTable('pets')
    table.string('userId')
    table.string('content')
    table.string('createdAt')
    table.string('updatedAt')
  })
}

export const down = async (knex) => {
  return knex.schema.dropTable('petComments')
}
