"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const DbContext_1 = require("../context/DbContext");
const Helpers_1 = require("../commons/Helpers");
var _instance = new DbContext_1.DbInstance().getInstance();
class BillingCycle extends sequelize_1.Model {
    constructor(json) {
        super();
        if (Helpers_1.InnerJson.IsValid(json, ["date", "id"])) {
            this.id = json.id;
            this.credit = json.credit;
            this.debit = json.debit;
            this.date = json.date;
            this.month = this.date.getMonth() + 1;
        }
    }
}
exports.BillingCycle = BillingCycle;
BillingCycle.init({
    id: {
        type: new sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    credit: {
        type: new sequelize_1.DataTypes.FLOAT
    },
    debit: {
        type: new sequelize_1.DataTypes.FLOAT
    },
    date: {
        type: new sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    month: {
        type: new sequelize_1.DataTypes.INTEGER,
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
//# sourceMappingURL=BillingCycle.js.map