"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Circle;

var _Arc = require("./Arc");

var _Arc2 = _interopRequireDefault(_Arc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Circle(circleData) {

    return " M " + (0, _Arc2.default)(circleData, 0, 359.5);
}