"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = CirclePoint;
function CirclePoint(circle, degre) {
    var center = circle.center,
        radius = circle.radius;


    var radian = degre * Math.PI / 180.0,
        x = center.x + radius * Math.cos(radian),
        y = center.y + radius * Math.sin(radian);

    return [x.toFixed(2), y.toFixed(2)];
}