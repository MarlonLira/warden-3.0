"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Helpers_1 = require("../commons/Helpers");
class InnerDate {
    constructor(fullDate) {
        this._isValidDate = true;
        let datePart = Helpers_1.Attributes.IsValid(fullDate) ? fullDate.split('-') : undefined;
        if (Helpers_1.Attributes.IsValid(datePart)) {
            this.Year = datePart[0];
            this.Month = datePart[1];
            this.Day = datePart[2];
            this.FullDate = fullDate;
        }
        else {
            this._isValidDate = false;
        }
    }
    getFullDate() {
        return this._isValidDate ? `${this.Year}-${this.Month}-${this.Day}` : undefined;
    }
    Now() {
        let _date = new Date();
        this.Year = _date.getFullYear();
        this.Month = _date.getMonth() + 1;
        this.Day = _date.getDay();
        this.FullDate = `${this.Year}-${this.Month}-${this.Day}`;
        return this;
    }
}
exports.InnerDate = InnerDate;
//# sourceMappingURL=InnerDate.js.map