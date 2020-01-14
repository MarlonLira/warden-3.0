import { Model, DataTypes } from 'sequelize';
import { DbInstance } from '../context/DbContext';

var _instance = new DbInstance().getInstance();

class BillingCycle extends Model {
  id!: number;
  credit!: number;
  debit!: number;
  constructor(json?: any) {
		super()
		if (json != undefined) {
      this.id = json.id;
      this.credit = json.credit;
      this.debit = json.debit;
		}
	}
}

BillingCycle.init({
  id: {
		type: new DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
  },
  credit:{
    type: new DataTypes.FLOAT
  },
  debit:{
    type: new DataTypes.FLOAT
  }
},{
  sequelize: _instance,
  tableName: 'billingCycle',
  scopes: {
		public: {
			attributes: ['credit', 'debit']
		}
	}
});

BillingCycle.sync({force: false});

export {BillingCycle}