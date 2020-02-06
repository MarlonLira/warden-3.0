"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Helpers_1 = require("../commons/Helpers");
class Dashboard {
    constructor(json) {
        this.credit = Helpers_1.Attributes.ReturnIfValid(json.credit, 0);
        this.debit = Helpers_1.Attributes.ReturnIfValid(json.debit, 0);
    }
}
exports.default = Dashboard;
//# sourceMappingURL=Dashboard.js.map