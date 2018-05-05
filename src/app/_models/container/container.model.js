"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var cerialize_1 = require("cerialize");
var Container = /** @class */ (function () {
    // TODO: (CDuPlooy) Add HostConfig Model.
    // TODO: (CDuPlooy) Add NetworkSettings Model.
    // TODO: (CDuPlooy) Add Mounts Model.
    // TODO: (CDuPlooy) Inspect relationship between container ID and endPointID in services for example.
    function Container() {
    }
    Container.parse = function (data) {
        var container = new Container();
        container = cerialize_1.Deserialize(data, Container);
        return container;
    };
    Container.prototype.toJSON = function () {
        return cerialize_1.Serialize(this);
    };
    __decorate([
        cerialize_1.deserializeAs('Id'), cerialize_1.serializeAs('Id')
    ], Container.prototype, "id", void 0);
    __decorate([
        cerialize_1.deserializeAs('Names'), cerialize_1.serializeAs('Names')
    ], Container.prototype, "names", void 0);
    __decorate([
        cerialize_1.deserializeAs('Image'), cerialize_1.serializeAs('Image')
    ], Container.prototype, "image", void 0);
    __decorate([
        cerialize_1.deserializeAs('ImageID'), cerialize_1.serializeAs('ImageID')
    ], Container.prototype, "imageID", void 0);
    __decorate([
        cerialize_1.deserializeAs('State'), cerialize_1.serializeAs('State')
    ], Container.prototype, "state", void 0);
    __decorate([
        cerialize_1.deserializeAs('Status'), cerialize_1.serializeAs('Status')
    ], Container.prototype, "status", void 0);
    __decorate([
        cerialize_1.deserializeAs('SizeRw'), cerialize_1.serializeAs('SizeRw')
    ], Container.prototype, "sizeRW", void 0);
    __decorate([
        cerialize_1.deserializeAs('SizeRootFs'), cerialize_1.serializeAs('SizeRootFs')
    ], Container.prototype, "sizeRootFS", void 0);
    return Container;
}());
exports.Container = Container;
