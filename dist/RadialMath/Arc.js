"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Arc;

var _CirclePoint = require("./CirclePoint");

var _CirclePoint2 = _interopRequireDefault(_CirclePoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Arc(circle, startDegre, endDegre) {
    var radius = circle.radius;

    var statrPoint = (0, _CirclePoint2.default)(circle, startDegre),
        endPoint = (0, _CirclePoint2.default)(circle, endDegre),
        cutMethod1 = Math.floor(Math.abs(endDegre - startDegre) / 180) % 2,
        cutMethod2 = Number(startDegre - endDegre < 0);
    return [statrPoint, "A" + radius, radius, 0, cutMethod1, cutMethod2, endPoint].join(" ");
}