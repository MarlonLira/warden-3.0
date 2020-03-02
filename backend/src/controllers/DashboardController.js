"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("sequelize");
const Http_1 = require("../commons/enums/Http");
const Http_2 = require("../commons/functions/Http");
const Helpers_1 = require("../commons/Helpers");
const InnerDate_1 = require("../models/InnerDate");
const Dashboard_1 = require("../models/Dashboard");
const BillingCycle_1 = require("../models/BillingCycle");
class DashboardController extends Dashboard_1.default {
    Save(response) {
        throw new Error("Method not implemented.");
    }
    Search(response, isAll) {
        let query = {};
        let date = new InnerDate_1.InnerDate().Now();
        query.attributes = [
            [sequelize_1.Sequelize.fn('SUM', sequelize_1.Sequelize.col('credit')), 'credit'],
            [sequelize_1.Sequelize.fn('SUM', sequelize_1.Sequelize.col('debit')), 'debit']
        ];
        query.where = {
            date: {
                [sequelize_2.Op.like]: `${date.Year}-${date.Month}%`
            }
        };
        return new Promise((resolve, reject) => {
            BillingCycle_1.BillingCycle.findOne(query)
                .then(result => {
                this.credit = Helpers_1.Attributes.ReturnIfValid(result.credit, 0);
                this.debit = Helpers_1.Attributes.ReturnIfValid(result.debit, 0);
                this.goal = Helpers_1.Attributes.ReturnIfValid(500, 0);
                resolve(response.status(Http_1.HttpCode.Ok).send(this));
            })
                .catch(error => {
                console.log(error);
                resolve(response.status(Http_1.HttpCode.Internal_Server_Error).send(Http_2.GetHttpMessage(Http_1.HttpCode.Internal_Server_Error, Dashboard_1.default, error)));
            });
        });
    }
    Update(response) {
        throw new Error("Method not implemented.");
    }
    Delete(response) {
        throw new Error("Method not implemented.");
    }
}
exports.default = DashboardController;
//# sourceMappingURL=DashboardController.js.map