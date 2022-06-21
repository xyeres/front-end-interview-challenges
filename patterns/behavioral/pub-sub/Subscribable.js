"use strict";
exports.__esModule = true;
exports.Subscribable = void 0;
var Subscribable = /** @class */ (function () {
    function Subscribable() {
        this.subscribers = new Set;
    }
    Subscribable.prototype.subscribe = function (cb) {
        var _this = this;
        this.subscribers.add(cb);
        return function () {
            _this.subscribers["delete"](cb);
        };
    };
    Subscribable.prototype.publish = function (msg) {
        this.subscribers.forEach(function (cb) { return cb(msg); });
    };
    return Subscribable;
}());
exports.Subscribable = Subscribable;
