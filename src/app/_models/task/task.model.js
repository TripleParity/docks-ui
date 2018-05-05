"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var cerialize_1 = require("cerialize");
var taskspec_model_1 = require("./spec/taskspec.model");
var status_model_1 = require("./status/status.model");
var Task = /** @class */ (function () {
    // TODO(CDuPlooy): Add network attachments model.
    function Task() {
    }
    Task.parse = function (data) {
        var task = new Task();
        task = cerialize_1.Deserialize(data, Task);
        task.spec = taskspec_model_1.TaskSpec.parse(data['Spec']);
        task.status = status_model_1.Status.parse(data['Status']);
        return task;
    };
    // TODO(CDuPlooy): Implemenet nested serialisation.
    Task.prototype.toJSON = function () {
        return cerialize_1.Serialize(this);
    };
    __decorate([
        cerialize_1.deserializeAs('ID'), cerialize_1.serializeAs('ID')
    ], Task.prototype, "id", void 0);
    __decorate([
        cerialize_1.deserializeAs('CreatedAt'), cerialize_1.serializeAs('CreatedAt')
    ], Task.prototype, "createdAt", void 0);
    __decorate([
        cerialize_1.deserializeAs('UpdatedAt'), cerialize_1.serializeAs('UpdatedAt')
    ], Task.prototype, "updatedAt", void 0);
    __decorate([
        cerialize_1.deserializeAs('TaskSpec'), cerialize_1.serializeAs('TaskSpec')
    ], Task.prototype, "spec", void 0);
    __decorate([
        cerialize_1.deserializeAs('ServiceID'), cerialize_1.serializeAs('ServiceID')
    ], Task.prototype, "serviceID", void 0);
    __decorate([
        cerialize_1.deserializeAs('Slot'), cerialize_1.serializeAs('Slot')
    ], Task.prototype, "slot", void 0);
    __decorate([
        cerialize_1.deserializeAs('NodeID'), cerialize_1.serializeAs('NodeID')
    ], Task.prototype, "nodeID", void 0);
    __decorate([
        cerialize_1.deserializeAs('Status'), cerialize_1.serializeAs('Status')
    ], Task.prototype, "status", void 0);
    __decorate([
        cerialize_1.deserializeAs('DesiredState'), cerialize_1.serializeAs('DesiredState')
    ], Task.prototype, "desiredState", void 0);
    __decorate([
        cerialize_1.deserializeAs('Name'), cerialize_1.serializeAs('Name')
    ], Task.prototype, "name", void 0);
    return Task;
}());
exports.Task = Task;
