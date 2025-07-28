// src/config/knexfile.ts
import 'dotenv/config';
import path from 'path';
import type { Knex } from 'knex';

const baseDir = __dirname; // => backend/src/config

const knexConfig: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'vitrine_user',
      password: process.env.DB_PASSWORD || 'vitrine1234',
      database: process.env.DB_NAME || 'project_vitrine',
      port: Number(process.env.DB_PORT) || 5432,
    },
    migrations: {
      // on pointe ici directement vers backend/src/config/migrations
      directory: path.join(baseDir, 'migrations'),
      tableName: 'knex_migrations',
      extension: 'ts',
      loadExtensions: ['.ts', '.js'],
    },
    seeds: {
      // si tu ajoutes des seeds dans src/config/seeds
      directory: path.join(baseDir, 'seeds'),
      loadExtensions: ['.ts', '.js'],
    },
    acquireConnectionTimeout: 6000,
    debug: true,
    log: {
      warn(msg) { console.warn('Warning :', msg); },
      error(msg) { console.error('Error   :', msg); },
    },
  },

  production: {
    client: 'pg',
    connection: { /* idem */ },
    migrations: {
      directory: path.join(baseDir, 'migrations'),
      tableName: 'knex_migrations',
      extension: 'ts',
      loadExtensions: ['.ts', '.js'],
    },
    seeds: {
      directory: path.join(baseDir, 'seeds'),
      loadExtensions: ['.ts', '.js'],
    },
    acquireConnectionTimeout: 6000,
    debug: false,
    log: {
      warn(msg) { console.warn('Warning :', msg); },
      error(msg) { console.error('Error   :', msg); },
    },
  },
};

export default knexConfig;
