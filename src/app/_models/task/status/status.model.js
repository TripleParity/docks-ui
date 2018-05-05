"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var cerialize_1 = require("cerialize");
var containerstatus_model_1 = require("./containerstatus.model");
var Status = /** @class */ (function () {
    function Status() {
    }
    Status.parse = function (data) {
        var stat = new Status();
        stat = cerialize_1.Deserialize(data, Status);
        stat.containerStatus = containerstatus_model_1.ContainerStatus.parse(data['ContainerStatus']);
        return stat;
    };
    Status.prototype.toJSON = function () {
        return cerialize_1.Serialize(this);
    };
    __decorate([
        cerialize_1.deserializeAs('Timestamp'), cerialize_1.serializeAs('Timestamp')
    ], Status.prototype, "timestamp", void 0);
    __decorate([
        cerialize_1.deserializeAs('State'), cerialize_1.serializeAs('State')
    ], Status.prototype, "state", void 0);
    __decorate([
        cerialize_1.deserializeAs('Message'), cerialize_1.serializeAs('Message')
    ], Status.prototype, "message", void 0);
    __decorate([
        cerialize_1.deserializeAs('Timestamp'), cerialize_1.serializeAs('Timestamp')
    ], Status.prototype, "image", void 0);
    __decorate([
        cerialize_1.deserializeAs('ContainerStatus'), cerialize_1.serializeAs('ContainerStatus')
    ], Status.prototype, "containerStatus", void 0);
    return Status;
}());
exports.Status = Status;
