"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var cerialize_1 = require("cerialize");
var Volume = /** @class */ (function () {
    function Volume() {
    }
    Volume.parse = function (data) {
        var volume = new Volume();
        volume = cerialize_1.Deserialize(data, Volume);
        return volume;
    };
    Volume.prototype.toJSON = function () {
        return cerialize_1.Serialize(this);
    };
    __decorate([
        cerialize_1.deserializeAs('Name'), cerialize_1.serializeAs('Name')
    ], Volume.prototype, "name", void 0);
    __decorate([
        cerialize_1.deserializeAs('Driver'), cerialize_1.serializeAs('Driver')
    ], Volume.prototype, "driver", void 0);
    __decorate([
        cerialize_1.deserializeAs('Mountpoint'), cerialize_1.serializeAs('Mountpoint')
    ], Volume.prototype, "mountPoint", void 0);
    __decorate([
        cerialize_1.deserializeAs('Scope'), cerialize_1.serializeAs('Scope')
    ], Volume.prototype, "scope", void 0);
    return Volume;
}());
exports.Volume = Volume;
