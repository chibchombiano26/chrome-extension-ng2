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
var SetMoreUser_1 = require('./../../models/SetMoreUser');
var appSettings_1 = require("../appSettings");
var api_1 = require('./../../chrome/api');
var router_1 = require('@angular/router');
var LoginComponent = (function () {
    function LoginComponent(_router, horizonService, setMoreService) {
        this.horizonService = horizonService;
        this.setMoreService = setMoreService;
        this.user = new SetMoreUser_1.SetMoreUser("", "");
        this.user.username = "hefesoft.peluqueria.01@gmail.com";
        this.user.password = "Salon123";
        this.router = _router;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.setMoreService.login(this.user).subscribe(function (e) {
            var notify = new api_1.Notify();
            notify.notify("Hi " + _this.user.username, "Nice to see you again");
            _this.router.navigate(['/service']);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: appSettings_1.AppSettings.PATH + 'login/login.tpl.html',
            providers: [index_1.horizonService, index_1.setMoreService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.horizonService, index_1.setMoreService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.js.map