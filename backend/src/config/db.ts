import Knex from 'knex';
import {knexConfig} from 'knexfile.ts';

const db = Knex(knexConfig);

export default db;
