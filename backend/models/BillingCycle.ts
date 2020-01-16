import { Model, DataTypes } from 'sequelize';
import { DbInstance } from '../context/DbContext';
import { Attributes } from '../commons/Helpers';
import { InnerDate } from '../models/InnerDate';

var _instance = new DbInstance().getInstance();

class BillingCycle extends Model {
  id!: number;
  credit!: number;
  debit!: number;
  date!: InnerDate;
  //test: string;

  constructor(json?: any) {
    super();
    this.id = Attributes.IsValid(json.id) ? json.id : undefined;
    this.credit = Attributes.IsValid(json.credit) ? json.credit : 0;
    this.debit = Attributes.IsValid(json.debit) ? json.debit : 0;
    this.date = Attributes.IsValid(json.date) ? new InnerDate(json.date) : undefined;
    //this.test = new InnerDate(json.date).FullDate;
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
    type: new DataTypes.STRING(10),
    allowNull: true
  }
  // ,
  // test: {
  //   type: new DataTypes.STRING,
  //   allowNull: false
  // }
}, {
  sequelize: _instance,
  tableName: 'billingCycle',
  scopes: {
    public: {
      attributes: ['credit', 'debit', 'date']
    },
    consolidated: {
      attributes: ['credit', 'debit']
    }
  }
});

BillingCycle.sync({ force: true });

export { BillingCycle }