import { Sequelize } from 'sequelize';
import * as Config from '../config.json';

var _dbConfig = Config.Database.MSSQL;

class DbContext {

  private port: number;
  private host: string;
  private Schema: string;
  private userName: string;
  private password: string;

  constructor() {
    this.userName = _dbConfig.username;
    this.password = _dbConfig.password;
    this.host = _dbConfig.host;
    this.Schema = _dbConfig.schema;
    this.port = _dbConfig.port;
  }

  getNewInstance() {
    const sequelize = new Sequelize(this.Schema, this.userName, this.password,
      {
        port: this.port,
        host: this.host,
        dialect: 'mssql'
        // dialectOptions: {
        //   ssl: true
        // }
      }
    );

    return sequelize;
  }
}

class DbInstance {
  getInstance() {
    return new DbContext().getNewInstance();
  }
}

export { DbInstance }