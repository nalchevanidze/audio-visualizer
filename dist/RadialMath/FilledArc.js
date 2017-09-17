"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = FilledArc;

var _Arc = require("./Arc");

var _Arc2 = _interopRequireDefault(_Arc);

var _CircleLine = require("./CircleLine");

var _CircleLine2 = _interopRequireDefault(_CircleLine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FilledArc(center, radiuses, start, end) {
    var _radiuses = _slicedToArray(radiuses, 2),
        r1 = _radiuses[0],
        r2 = _radiuses[1];

    var circle1 = { center: center, radius: r1 },
        circle2 = { center: center, radius: r2 };

    return "M" + (0, _CircleLine2.default)(center, r1, r2, start) + " " + (0, _Arc2.default)(circle1, start, end) + " L" + (0, _CircleLine2.default)(center, r1, r2, end) + " " + (0, _Arc2.default)(circle2, end, start);
}