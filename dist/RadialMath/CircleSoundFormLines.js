"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = CircleSoundForm;

var _CircleLine = require("./CircleLine");

var _CircleLine2 = _interopRequireDefault(_CircleLine);

var _ResoluteArray = require("./ResoluteArray");

var _ResoluteArray2 = _interopRequireDefault(_ResoluteArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CircleSoundForm(a, _ref) {
    var _ref$w = _ref.w,
        w = _ref$w === undefined ? 1 : _ref$w,
        cx = _ref.cx,
        cy = _ref.cy,
        c = _ref.c;

    if (a.length < 2) {
        return "";
    }

    var resolution = 200;
    var compactData = (0, _ResoluteArray2.default)(a, resolution);

    //let stepSize = props.width / resolution;
    var scaler = w * 1.5;
    var ent = 40;
    var de = 360 - 2 * ent;
    var stepSize = de / compactData.length;

    var center = {
        x: cx,
        y: cy
    };

    return compactData.map(function (e, i) {
        return "M" + (0, _CircleLine2.default)(center, c - e * scaler, c + e * scaler, ent + i * stepSize);
    }).join(" ");
}