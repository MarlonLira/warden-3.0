"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Helpers {
}
exports.Helpers = Helpers;
class Attributes {
    static IsValid(value) {
        let result = false;
        if (value != undefined && value != '' && value != null) {
            result = true;
        }
        return result;
    }
    static ReturnIfValid(value) {
        let result = null;
        if (value != undefined && value != '' && value != null) {
            result = value;
        }
        return result;
    }
}
exports.Attributes = Attributes;
class InnerJson {
    static IsValid(json, requiredAttributes) {
        let result = false;
        let count = 0;
        if (json != undefined && json != '' && json != null) {
            result = true;
        }
        requiredAttributes.forEach(element => {
            if (json.hasOwnProperty(element)) {
                result = true;
                count++;
            }
        });
        if (count <= 0)
            result = false;
        return result;
    }
}
exports.InnerJson = InnerJson;
//# sourceMappingURL=Helpers.js.map