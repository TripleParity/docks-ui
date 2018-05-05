"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var cerialize_1 = require("cerialize");
var containerspec_model_1 = require("./containerspec.model");
var TaskSpec = /** @class */ (function () {
    function TaskSpec() {
    }
    TaskSpec.parse = function (data) {
        var task = new TaskSpec();
        task = cerialize_1.Deserialize(data, TaskSpec);
        task.containerSpec = containerspec_model_1.ContainerSpec.parse(data['ContainerSpec']);
        return task;
    };
    TaskSpec.prototype.toJSON = function () {
        return cerialize_1.Serialize(this);
    };
    __decorate([
        cerialize_1.deserializeAs('ContainerSpec'), cerialize_1.serializeAs('ContainerSpec')
    ], TaskSpec.prototype, "containerSpec", void 0);
    return TaskSpec;
}());
exports.TaskSpec = TaskSpec;
