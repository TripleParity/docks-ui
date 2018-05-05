"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var _models_1 = require("../../_models");
var ErrorObservable_1 = require("rxjs/observable/ErrorObservable");
var TaskError;
(function (TaskError) {
    TaskError[TaskError["ERR_OK"] = 200] = "ERR_OK";
    TaskError[TaskError["ERR_SERVER"] = 500] = "ERR_SERVER";
    TaskError[TaskError["ERR_NODE_N_SWARM"] = 503] = "ERR_NODE_N_SWARM";
    TaskError[TaskError["ERR_NO_TASK"] = 404] = "ERR_NO_TASK";
})(TaskError = exports.TaskError || (exports.TaskError = {}));
var TaskService = /** @class */ (function () {
    function TaskService(http, config) {
        this.http = http;
        this.config = config;
    }
    TaskService.prototype.getTasks = function () {
        return this.http.get(this.config.getAPIHostname() + '/docker/tasks', { responseType: 'json' })
            .pipe(operators_1.map(function (data) {
            console.log(data);
            var tasks = [];
            for (var i = 0; i < Object.keys(data).length; i++) {
                tasks.push(_models_1.Task.parse(data[i]));
            }
            return tasks;
        }), operators_1.catchError(function (err) {
            return ErrorObservable_1.ErrorObservable.create(err.status);
        }));
    };
    TaskService.prototype.getLog = function (id) {
        return this.http.get(this.config.getAPIHostname() + '/docker/tasks/' + id + '/logs', { responseType: 'text' })
            .pipe(operators_1.map(function (x) {
            return x;
        }), operators_1.catchError(function (err) {
            return ErrorObservable_1.ErrorObservable.create(err.status);
        }));
    };
    TaskService.prototype.inspect = function (id) {
        return this.http.get(this.config.getAPIHostname() + '/docker/tasks/' + id, { responseType: 'json' })
            .pipe(operators_1.map(function (x) {
            return x;
        }), operators_1.catchError(function (err) {
            return ErrorObservable_1.ErrorObservable.create(err.status);
        }));
    };
    TaskService = __decorate([
        core_1.Injectable()
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
