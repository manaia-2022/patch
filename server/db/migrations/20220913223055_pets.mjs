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
    table.int('impressions').defaultTo(0)
    table.int('patchPoints').defaultTo(0)
    table.int('scratchPoints').defaultTo(0)
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
