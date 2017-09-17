"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = RoundStatistic2;

var _CirclePoint = require("./CirclePoint");

var _CirclePoint2 = _interopRequireDefault(_CirclePoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RoundStatistic2(a, center, r, t) {
    var ent = 40;
    var de = 360 - 2 * ent;
    var ds = ent;
    var l = a.length;
    return a.map(function (e, i) {
        var radius = r + e * t;
        var degree = ds + de * i / l;
        return (0, _CirclePoint2.default)({ center: center, radius: radius }, degree);
    });
}