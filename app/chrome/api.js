"use strict";
var Notify = (function () {
    function Notify() {
    }
    Notify.prototype.notify = function (title, message) {
        debugger;
        var n = chrome.notifications.create('reminder', {
            type: 'basic',
            iconUrl: '/images/icon_128.png',
            title: title,
            message: message
        }, function (notificationId) { });
    };
    return Notify;
}());
exports.Notify = Notify;
//# sourceMappingURL=api.js.map