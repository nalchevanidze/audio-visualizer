"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = LinearStatistic;
function LinearStatistic(a, w, height) {
    var stepSize = w / a.length;
    return a.map(function (value, index) {
        return [index * stepSize, value * height].join(" ");
    });
}