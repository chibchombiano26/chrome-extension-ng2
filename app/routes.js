"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./components/index');
var routes = [
    { path: 'staff', component: index_1.StaffComponent },
    { path: 'service', component: index_1.ServicesComponent },
    { path: '', component: index_1.LoginComponent },
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=routes.js.map