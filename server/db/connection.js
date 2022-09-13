import knex from 'knex'

import config from './knexfile.cjs'
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

export default connection
