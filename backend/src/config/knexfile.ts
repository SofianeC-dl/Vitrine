require('dotenv').config();

const knexConfig = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'vitrine_user',
      password: process.env.DB_PASSWORD || 'vitrine1234',
      database: process.env.DB_NAME || 'project_vitrine',
      port: Number(process.env.DB_PORT) || 5432
    },
    migrations: {
      directory: '../migrations',
      tableName: 'knex_migrations',
      extensions: 'ts'
    },
    acquireConnectionTimeout: 6000,
    debug: true,
    log: {
      warn(message: any){
        console.log('Warning : ', message)
      },
      error(message: any){
        console.log('Error : ', message)
      }
    }
  },

  production: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || 'db',
      user: process.env.DB_USER || 'vitrine_user',
      password: process.env.DB_PASSWORD || 'vitrine1234',
      database: process.env.DB_NAME || 'project_vitrine',
      port: Number(process.env.DB_PORT) || 5432
    },
    migrations: {
      directory: './backend/migrations',
      tableName: 'knex_migrations',
      extensions: 'ts'
    },
    acquireConnectionTimeout: 6000,
    debug: true,
    log: {
      warn(message: any){
        console.log('Warning : ', message)
      },
      error(message: any){
        console.log('Error : ', message)
      }
    }
  }
};
