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
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
var setMoreService = (function () {
    function setMoreService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.baseUrl = "https://my.setmore.com/";
    }
    setMoreService.prototype.getServices = function () {
        return this.http.get(this.baseUrl + "Services");
    };
    setMoreService.prototype.getStaff = function () {
        return this.http.get(this.baseUrl + "Staff");
    };
    setMoreService.prototype.login = function (user) {
        var options = new http_1.RequestOptions({ headers: this.headers, method: "post" });
        var body = 'username=' + user.username + '&password=' + user.password;
        return this.http.post(this.baseUrl + "Login.do", body, options);
    };
    setMoreService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], setMoreService);
    return setMoreService;
}());
exports.setMoreService = setMoreService;
//# sourceMappingURL=set_more.js.map