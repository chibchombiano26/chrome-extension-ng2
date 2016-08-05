"use strict";
var Notify = (function () {
    function Notify() {
    }
    Notify.prototype.notify = function (title, message) {
        var n = chrome.notifications.create('reminder', {
            type: 'basic',
            iconUrl: 'Icon-128.png',
            title: title,
            message: message
        }, function (notificationId) { });
    };
    return Notify;
}());
exports.Notify = Notify;
//# sourceMappingURL=api.js.map