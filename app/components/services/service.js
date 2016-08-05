"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var index_1 = require("./../../services/index");
var appSettings_1 = require("../appSettings");
var ServicesComponent = (function () {
    function ServicesComponent(horizonService, setMoreService) {
        this.horizonService = horizonService;
        this.setMoreService = setMoreService;
        this.ListServices = [];
        this.load();
    }
    ServicesComponent.prototype.load = function () {
        var _this = this;
        this.setMoreService.getServices().subscribe(function (services) {
            var data = services;
            _this.ListServices = JSON.parse(data._body);
        });
    };
    ServicesComponent = __decorate([
        core_1.Component({
            selector: 'app-services',
            templateUrl: appSettings_1.AppSettings.PATH + 'services/service.tpl.html',
            providers: [index_1.horizonService, index_1.setMoreService]
        }), 
        __metadata('design:paramtypes', [index_1.horizonService, index_1.setMoreService])
    ], ServicesComponent);
    return ServicesComponent;
}());
exports.ServicesComponent = ServicesComponent;
//# sourceMappingURL=service.js.map