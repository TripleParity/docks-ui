"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ConfigurationService = /** @class */ (function () {
    function ConfigurationService() {
        // TODO(CDuPlooy): For now localhost:8080 seems sane enough. Maybe change it to docks-api at some point.
        this.api_hostname = 'http://localhost:8080';
    }
    ConfigurationService.prototype.getAPIHostname = function () {
        return this.api_hostname;
    };
    ConfigurationService.prototype.setAPIHostname = function (hostname) {
        this.api_hostname = hostname;
        // Perhaps introduce an observable that fires everytime this value is changed
        // for more complicated components. I don't really see a use case so I'm leaving this comment.
        // Check if host is reachable before assigning the hostname ?
    };
    ConfigurationService = __decorate([
        core_1.Injectable()
    ], ConfigurationService);
    return ConfigurationService;
}());
exports.ConfigurationService = ConfigurationService;
