"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/do");
var TOKEN_HEADER_KEY = 'Authorization';
var AuthInjector = /** @class */ (function () {
    function AuthInjector(tokens) {
        this.tokens = tokens;
    }
    AuthInjector.prototype.intercept = function (req, next) {
        // TODO(CDuPlooy): Inject jwt here
        req = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + this.tokens.getToken('auth')) });
        return next.handle(req).do(function (err) {
            // Logging errors here seems like a bad idea.
            // TODO(CDuPlooy): Token expiry?
        });
    };
    AuthInjector = __decorate([
        core_1.Injectable()
    ], AuthInjector);
    return AuthInjector;
}());
exports.AuthInjector = AuthInjector;
