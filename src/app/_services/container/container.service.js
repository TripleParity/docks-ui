"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var _models_1 = require("../../_models");
var operators_1 = require("rxjs/operators");
var ContainerService = /** @class */ (function () {
    function ContainerService(http, config) {
        this.http = http;
        this.config = config;
    }
    ContainerService.prototype.getContainer = function () {
        return this.http.get(this.config.getAPIHostname() + '/docker/containers/json', { responseType: 'json' }).pipe(operators_1.map(function (data) {
            var containers = [];
            for (var i = 0; i < Object.keys(data).length; i++) {
                containers.push(_models_1.Container.parse(data[i]));
            }
            return containers;
        }));
    };
    ContainerService = __decorate([
        core_1.Injectable()
    ], ContainerService);
    return ContainerService;
}());
exports.ContainerService = ContainerService;
