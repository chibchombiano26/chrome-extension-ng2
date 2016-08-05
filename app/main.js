"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var bookmark_component_1 = require('./bookmark.component');
var core_1 = require('@angular/core');
function RunApplication(horizon) {
    platform_browser_dynamic_1.bootstrap(bookmark_component_1.AppComponent, [
        core_1.provide("horizon", { useValue: horizon })
    ]);
}
exports.RunApplication = RunApplication;
//# sourceMappingURL=main.js.map