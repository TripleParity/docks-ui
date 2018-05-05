"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var cerialize_1 = require("cerialize");
var Image = /** @class */ (function () {
    // TODO: (CDuPlooy) Labels example?
    function Image() {
    }
    Image.parse = function (data) {
        var image = new Image();
        image = cerialize_1.Deserialize(data, Image);
        return image;
    };
    Image.prototype.toJSON = function () {
        return cerialize_1.Serialize(this);
    };
    __decorate([
        cerialize_1.deserializeAs('Id'), cerialize_1.serializeAs('Id')
    ], Image.prototype, "id", void 0);
    __decorate([
        cerialize_1.deserializeAs('Created'), cerialize_1.serializeAs('Created')
    ], Image.prototype, "created", void 0);
    __decorate([
        cerialize_1.deserializeAs('Size'), cerialize_1.serializeAs('Size')
    ], Image.prototype, "size", void 0);
    __decorate([
        cerialize_1.deserializeAs('VirtualSize'), cerialize_1.serializeAs('VirtualSize')
    ], Image.prototype, "virtualSize", void 0);
    return Image;
}());
exports.Image = Image;
