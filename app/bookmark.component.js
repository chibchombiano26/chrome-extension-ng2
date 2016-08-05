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
var horizon_1 = require("./services/horizon");
var set_more_1 = require("./services/set_more");
var SetMoreUser_1 = require('./models/SetMoreUser');
var AppComponent = (function () {
    function AppComponent(horizonService, setMoreService) {
        this.horizonService = horizonService;
        this.setMoreService = setMoreService;
        setMoreService.login(new SetMoreUser_1.SetMoreUser("hefesoft.peluqueria.01@gmail.com", "Salon123")).subscribe(function (e) {
            setMoreService.getServices().subscribe(function (services) {
                var data = services;
                var ListServices = JSON.parse(data._body);
            });
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<h1>My First Angular 2 App</h1>',
            providers: [horizon_1.horizonService, set_more_1.setMoreService]
        }), 
        __metadata('design:paramtypes', [horizon_1.horizonService, set_more_1.setMoreService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=bookmark.component.js.map