"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _CircleLine = require("./RadialMath/CircleLine");

var _CircleLine2 = _interopRequireDefault(_CircleLine);

var _ArcBorders2 = require("./RadialMath/ArcBorders");

var _ArcBorders3 = _interopRequireDefault(_ArcBorders2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RoundLoading(center, radius, pro, ins, dif) {
    var _ArcBorders = (0, _ArcBorders3.default)(pro, ins, dif),
        end = _ArcBorders.end;

    return "M" + (0, _CircleLine2.default)(center, radius[0], radius[1], end);
}

var LineTime = function LineTime(_ref) {
    var cx = _ref.cx,
        cy = _ref.cy,
        r1 = _ref.r1,
        r2 = _ref.r2,
        pro = _ref.pro,
        inside = _ref.inside,
        dif = _ref.dif,
        className = _ref.className,
        id = _ref.id;
    return _react2.default.createElement("path", {
        d: RoundLoading({ x: cx, y: cy }, [r1, r2], pro, inside, dif),
        className: className,
        id: id
    });
};

exports.default = LineTime;