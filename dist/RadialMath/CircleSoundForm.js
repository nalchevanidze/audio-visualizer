"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = CircleSoundForm;

var _RoundStatistic = require("./RoundStatistic2");

var _RoundStatistic2 = _interopRequireDefault(_RoundStatistic);

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

    var center = { x: cx, y: cy };
    return "M" + (0, _RoundStatistic2.default)(a, center, c, w).join(" ") + " " + (0, _RoundStatistic2.default)(a, center, c, -w).reverse().join(" ") + "z";
}