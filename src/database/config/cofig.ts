import { Options, Sequelize } from "sequelize"; 

const databaseConfig: Options = {
  username: 'postgres',
  password: 'example',
  database: 'postgres',
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 200000,
    acquire: 200000,
  },
}

export default new Sequelize(databaseConfig);
