"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DrawArcs = DrawArcs;

var _Arc = require("./Arc");

var _Arc2 = _interopRequireDefault(_Arc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DrawArcs(procent) {

    // procent must be fom 0 to 100
    var degre = 90 + procent * 3.6;

    var circle = {
        center: {
            x: 50,
            y: 50
        },
        radius: 45
    };

    return {
        visible: (0, _Arc2.default)(circle, 90, degre),
        invisible: (0, _Arc2.default)(circle, degre, 90)
    };
}