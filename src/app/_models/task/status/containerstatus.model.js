"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var cerialize_1 = require("cerialize");
var ContainerStatus = /** @class */ (function () {
    function ContainerStatus() {
    }
    ContainerStatus.parse = function (data) {
        var stat = new ContainerStatus();
        stat = cerialize_1.Deserialize(data, ContainerStatus);
        return stat;
    };
    ContainerStatus.prototype.toJSON = function () {
        return cerialize_1.Serialize(this);
    };
    __decorate([
        cerialize_1.deserializeAs('ContainerID'), cerialize_1.serializeAs('ContainerID')
    ], ContainerStatus.prototype, "containerID", void 0);
    __decorate([
        cerialize_1.deserializeAs('PID'), cerialize_1.serializeAs('PID')
    ], ContainerStatus.prototype, "state", void 0);
    return ContainerStatus;
}());
exports.ContainerStatus = ContainerStatus;
