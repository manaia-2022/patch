import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const defaults = {
  useNullAsDefault: true,
  migrations: {
    directory: path.resolve(__dirname, 'migrations'),
    loadExtensions: ['.mjs'],
  },
  seeds: {
    directory: path.resolve(__dirname, 'seeds'),
    loadExtensions: ['.mjs'],
  },
}

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  development: {
    ...defaults,
    client: 'better-sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'dev.sqlite3'),
    },
  },
  staging: {
    ...defaults,
    client: 'better-sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'dev.sqlite3'),
    },
  },
  test: {
    ...defaults,
    client: 'better-sqlite3',
    connection: {
      filename: ':memory:',
    },
    seeds: {
      ...defaults.seeds,
      directory: path.resolve(__dirname, 'test-seeds'),
    },
  },
  production: {
    client: 'postgresql',
    connection: {
      // TODO: configure these before deploying
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      ...defaults.migrations,
    },
  },
}
