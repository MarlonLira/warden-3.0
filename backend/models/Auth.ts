import { Model, DataTypes } from 'sequelize';
import { DbInstance } from '../context/DbContext';
import { Attributes } from '../commons/Helpers';
import * as Config from '../config.json';

var _reSync = Config.Database.ForceSync;
var _instance = new DbInstance().getInstance();

class Auth {

  token!: string;
  validated!: boolean;
  user!: any;

  constructor(json?: any) {
    this.token = json.token;
    this.user = json.user;
  }
}

export { Auth };
