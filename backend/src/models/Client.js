"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const DbContext_1 = require("../context/DbContext");
const Helpers_1 = require("../commons/Helpers");
var _instance = new DbContext_1.DbInstance().getInstance();
class Client extends sequelize_1.Model {
    constructor(json) {
        super();
        this.id = Helpers_1.Attributes.ReturnIfValid(json.id);
        this.name = Helpers_1.Attributes.ReturnIfValid(json.name);
        this.status = Helpers_1.Attributes.ReturnIfValid(json.status);
        this.registryCode = Helpers_1.Attributes.ReturnIfValid(json.registryCode);
        this.phone = Helpers_1.Attributes.ReturnIfValid(json.phone);
        this.email = Helpers_1.Attributes.ReturnIfValid(json.email);
    }
}
exports.Client = Client;
Client.init({
    id: {
        type: new sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    status: {
        type: new sequelize_1.DataTypes.INTEGER
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(30),
        allowNull: false
    },
    registryCode: {
        type: new sequelize_1.DataTypes.STRING(12),
        allowNull: false
    },
    phone: {
        type: new sequelize_1.DataTypes.STRING(12)
    },
    email: {
        type: new sequelize_1.DataTypes.STRING(50)
    }
}, {
    sequelize: _instance,
    tableName: 'Client',
    scopes: {
        public: {
            attributes: ['id', 'name', 'phone', 'email', 'registryCode']
        }
    }
});
Client.sync({ force: false });
//# sourceMappingURL=Client.js.map