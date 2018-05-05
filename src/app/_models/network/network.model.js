"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var cerialize_1 = require("cerialize");
var Network = /** @class */ (function () {
    // TODO: (CDuPlooy) Create options model.
    function Network() {
    }
    Network.parse = function (data) {
        var network = new Network();
        network = cerialize_1.Deserialize(data, Network);
        return network;
    };
    Network.prototype.toJSON = function () {
        return cerialize_1.Serialize(this);
    };
    __decorate([
        cerialize_1.deserializeAs('Id'), cerialize_1.serializeAs('Id')
    ], Network.prototype, "id", void 0);
    __decorate([
        cerialize_1.deserializeAs('Name'), cerialize_1.serializeAs('Name')
    ], Network.prototype, "name", void 0);
    __decorate([
        cerialize_1.deserializeAs('Driver'), cerialize_1.serializeAs('Driver')
    ], Network.prototype, "driver", void 0);
    __decorate([
        cerialize_1.deserializeAs('Scope'), cerialize_1.serializeAs('Scope')
    ], Network.prototype, "scope", void 0);
    __decorate([
        cerialize_1.deserializeAs('Internal'), cerialize_1.serializeAs('Internal')
    ], Network.prototype, "internal", void 0);
    __decorate([
        cerialize_1.deserializeAs('EnableIPv6'), cerialize_1.serializeAs('EnableIPv6')
    ], Network.prototype, "enableIPv6", void 0);
    return Network;
}());
exports.Network = Network;
