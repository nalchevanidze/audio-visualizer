"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ArcBorders;
function ArcBorders(pro, ins, dif) {
    ins[0] = ins[0] < 0 ? 360 + ins[0] : ins[0];
    var i = ins || [0, 360];
    var l = i[0] - i[1];
    var p = { s: i[1], e: i[0], l: l };
    var start = p.s;
    var end = p.s + l * pro;
    if (dif) {
        start = p.e;
        end = p.e - l * (1 - pro);
    }
    return { start: start, end: end };
}