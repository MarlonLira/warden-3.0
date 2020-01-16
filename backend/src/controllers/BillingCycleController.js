"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BillingCycle_1 = require("../models/BillingCycle");
const Http_1 = require("../commons/enums/Http");
const Http_2 = require("../commons/functions/Http");
const Helpers_1 = require("../commons/Helpers");
class BillingCycleController extends BillingCycle_1.BillingCycle {
    Save(response) {
        return new Promise((resolve, reject) => {
            BillingCycle_1.BillingCycle.create({
                credit: Helpers_1.Attributes.ReturnIfValid(this.credit),
                debit: Helpers_1.Attributes.ReturnIfValid(this.debit),
                date: Helpers_1.Attributes.ReturnIfValid(this.date),
                month: this.month
            }).then(result => {
                response.status(Http_1.HttpCode.Ok).send(Http_2.GetHttpMessage(Http_1.HttpCode.Ok, null, result));
                resolve(result);
            }).catch(error => {
                console.error(error);
                resolve(response.status(Http_1.HttpCode.Internal_Server_Error).send(Http_2.GetHttpMessage(Http_1.HttpCode.Internal_Server_Error)));
            });
        });
    }
    Search(response, isAll) {
        let currentMonth = new Date().getMonth() + 1;
        return new Promise((resolve, reject) => {
            BillingCycle_1.BillingCycle.scope('public').findAll({
                where: {
                    month: currentMonth
                }
            })
                .then(result => {
                if (result != null && result != undefined) {
                    response.status(Http_1.HttpCode.Ok).send(result);
                    resolve(result);
                }
                else {
                    resolve(response.status(Http_1.HttpCode.Not_Found).send(Http_2.GetHttpMessage(Http_1.HttpCode.Not_Found)));
                }
                resolve(result);
            }).catch(error => {
                console.error(error);
                resolve(response.status(Http_1.HttpCode.Internal_Server_Error).send(Http_2.GetHttpMessage(Http_1.HttpCode.Internal_Server_Error)));
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
exports.default = BillingCycleController;
//# sourceMappingURL=BillingCycleController.js.map