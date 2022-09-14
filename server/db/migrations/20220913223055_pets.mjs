/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) => {
  return knex.schema.createTable('pets', (table) => {
    table.increments('id')
    table.string('ownerId')
    table.string('name')
    table.int('age')
    table.string('animal')
    table.string('bio')
    table.int('impressions')
    table.int('patchPoints')
    table.int('scratchPoints')
    table.timestamps(true, true, true)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => {
  return knex.schema.dropTable('pets')
}
