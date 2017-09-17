"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = CircleLine;

var _CirclePoint = require("./CirclePoint");

var _CirclePoint2 = _interopRequireDefault(_CirclePoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CircleLine(center, start, end, degre) {

    var point1 = (0, _CirclePoint2.default)({ center: center, radius: start }, degre),
        point2 = (0, _CirclePoint2.default)({ center: center, radius: end }, degre);

    return point1 + " " + point2;
}