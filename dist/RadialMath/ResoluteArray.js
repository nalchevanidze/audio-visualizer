"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ResoluteArray;
function ResoluteArray(ARRAY, steps) {
    var out = [],
        d = Math.floor(ARRAY.length / steps),
        n = 0,
        v = 0;
    for (var i = 0; i < ARRAY.length; i++) {
        n++;
        if (n > d) {
            out.push(Math.round(v / d * 100) / 100);
            n = 0;
            v = 0;
        } else {
            v += Math.abs(ARRAY[i]);
        }
    }
    return out;
}