"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var cerialize_1 = require("cerialize");
var Service = /** @class */ (function () {
    // TODO: (CDuPlooy) Create spec model.
    // TODO: (CDuPlooy) Create resources model.
    // TODO: (CDuPlooy) Create restart policy model.
    // TODO: (CDuPlooy) Create placement model.
    // TODO: (CDuPlooy) Create mode model.
    // TODO: (CDuPlooy) Create update config model.
    // TODO: (CDuPlooy) Create endpoints spec model.
    // TODO: (CDuPlooy) Create endpoint model.
    // TODO: (CDuPlooy) Create VirtualIPs model.
    function Service() {
    }
    Service.parse = function (data) {
        var service = new Service();
        service = cerialize_1.Deserialize(data, Service);
        return service;
    };
    Service.prototype.toJSON = function () {
        return cerialize_1.Serialize(this);
    };
    __decorate([
        cerialize_1.deserializeAs('Id'), cerialize_1.serializeAs('Id')
    ], Service.prototype, "id", void 0);
    __decorate([
        cerialize_1.deserializeAs('CreatedAt'), cerialize_1.serializeAs('CreatedAt')
    ], Service.prototype, "createdAt", void 0);
    __decorate([
        cerialize_1.deserializeAs('UpdatedAt'), cerialize_1.serializeAs('UpdatedAt')
    ], Service.prototype, "updatedAt", void 0);
    return Service;
}());
exports.Service = Service;
