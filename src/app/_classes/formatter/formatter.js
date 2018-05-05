"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Formatter = /** @class */ (function () {
    function Formatter() {
    }
    Formatter.PrettifyDateTime = function (DateTime) {
        var buff = DateTime;
        return buff.slice(0, 10) + ' ' + DateTime.slice(11, 16);
    };
    return Formatter;
}());
exports.Formatter = Formatter;
