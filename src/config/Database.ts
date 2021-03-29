import { Sequelize } from "sequelize-typescript";
import * as path from "path";


export default class Database {
    private readonly sequelize: Sequelize;
  
    constructor() {
      this.sequelize = new Sequelize({
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
        // models
        modelPaths: [path.resolve(__dirname, '../model/pedro')]
      });
    }
  
    getSequelize() {
      return this.sequelize;
    }
  }