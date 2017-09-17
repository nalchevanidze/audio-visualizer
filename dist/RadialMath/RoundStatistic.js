"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = RoundStatistic;

var _CirclePoint = require("./CirclePoint");

var _CirclePoint2 = _interopRequireDefault(_CirclePoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RoundStatistic(a, center, r, t, cut) {

    var l = a.length - 1;
    return "M" + [].map.call(a, function (e, i) {
        var nr = r + e * t;
        var radius = nr > cut ? nr : cut;
        var degre = i * 360 / l;

        return (0, _CirclePoint2.default)({ center: center, radius: radius }, degre);
    }).join(" ") + "z";
}