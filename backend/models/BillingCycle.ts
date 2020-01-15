import { Model, DataTypes } from 'sequelize';
import { DbInstance } from '../context/DbContext';
import { Attributes } from '../commons/Helpers';

var _instance = new DbInstance().getInstance();

class BillingCycle extends Model {
  id!: number;
  credit!: number;
  debit!: number;
  date!: Date;
  month!: number;
  constructor(json?: any) {
    super()
    if (json != undefined) {
      this.id = json.id;
      this.credit = json.credit;
      this.debit = json.debit;
      this.date = json.date;
      this.month = this.date.getMonth() + 1
    }
  }
}

BillingCycle.init({
  id: {
    type: new DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  credit: {
    type: new DataTypes.FLOAT
  },
  debit: {
    type: new DataTypes.FLOAT
  },
  date: {
    type: new DataTypes.DATE,
    allowNull: false
  },
  month: {
    type: new DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize: _instance,
  tableName: 'billingCycle',
  scopes: {
    public: {
      attributes: ['credit', 'debit', 'date']
    }
  }
});

BillingCycle.sync({ force: false });

export { BillingCycle }