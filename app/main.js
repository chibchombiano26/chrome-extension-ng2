"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_componnent_1 = require('./components/app.componnent');
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
function RunApplication(horizon) {
    platform_browser_dynamic_1.bootstrap(app_componnent_1.AppComponent, [http_1.HTTP_PROVIDERS, core_1.provide("horizon", { useValue: horizon })]);
}
exports.RunApplication = RunApplication;
//# sourceMappingURL=main.js.map