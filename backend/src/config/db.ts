import Knex from 'knex';

const knexConfig = require('../knexfile');

const environment = process.env.NODE_ENV ?? 'development';
const db = Knex(knexConfig[environment]);

export default db;