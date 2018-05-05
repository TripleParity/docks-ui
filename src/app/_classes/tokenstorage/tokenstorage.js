"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AUTH_TOKEN = 'auth';
var TokenStorage = /** @class */ (function () {
    function TokenStorage() {
    }
    TokenStorage.prototype.signOut = function () {
        window.sessionStorage.removeItem(AUTH_TOKEN);
        window.sessionStorage.clear();
    };
    TokenStorage.prototype.saveToken = function (token, value) {
        window.sessionStorage.removeItem(token);
        window.sessionStorage.setItem(token, value);
    };
    TokenStorage.prototype.getToken = function (token) {
        return sessionStorage.getItem(token);
    };
    TokenStorage = __decorate([
        core_1.Injectable()
    ], TokenStorage);
    return TokenStorage;
}());
exports.TokenStorage = TokenStorage;
