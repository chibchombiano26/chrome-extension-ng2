"use strict";
var SetMoreUser = (function () {
    function SetMoreUser(username, password) {
        this.username = username;
        this.password = password;
    }
    return SetMoreUser;
}());
exports.SetMoreUser = SetMoreUser;
var Service = (function () {
    function Service(Apptcount, ColorCode, CompanyKey, Cost, Duration, Rates, ResourceKey, ServiceName, Status, blobkey, bufferDuration, imageURL, key) {
        this.Apptcount = Apptcount;
        this.ColorCode = ColorCode;
        this.CompanyKey = CompanyKey;
        this.Cost = Cost;
        this.Duration = Duration;
        this.Rates = Rates;
        this.ResourceKey = ResourceKey;
        this.ServiceName = ServiceName;
        this.Status = Status;
        this.blobkey = blobkey;
        this.bufferDuration = bufferDuration;
        this.imageURL = imageURL;
        this.key = key;
    }
    return Service;
}());
exports.Service = Service;
//# sourceMappingURL=SetMoreUser.js.map