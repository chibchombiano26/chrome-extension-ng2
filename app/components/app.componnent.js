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
var horizon_1 = require("./../services/horizon");
var set_more_1 = require("./../services/set_more");
var SetMoreUser_1 = require('./../models/SetMoreUser');
var appSettings_1 = require("./appSettings");
var api_1 = require('./../chrome/api');
var AppComponent = (function () {
    function AppComponent(horizonService, setMoreService) {
        this.horizonService = horizonService;
        this.setMoreService = setMoreService;
        this.user = new SetMoreUser_1.SetMoreUser("", "");
        this.user.username = "hefesoft.peluqueria.01@gmail.com";
        this.user.password = "Salon123";
    }
    AppComponent.prototype.login = function () {
        var _this = this;
        this.setMoreService.login(this.user).subscribe(function (e) {
            var notify = new api_1.Notify();
            notify.notify("Hi " + _this.user.username, "Nice to see you again");
            _this.setMoreService.getServices().subscribe(function (services) {
                var data = services;
                var ListServices = JSON.parse(data._body);
            });
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: appSettings_1.AppSettings.PATH + 'app.tpl.html',
            providers: [horizon_1.horizonService, set_more_1.setMoreService]
        }), 
        __metadata('design:paramtypes', [horizon_1.horizonService, set_more_1.setMoreService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.componnent.js.map