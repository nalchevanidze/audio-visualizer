"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _FilledArc = require("./RadialMath/FilledArc");

var _FilledArc2 = _interopRequireDefault(_FilledArc);

var _ArcBorders2 = require("./RadialMath/ArcBorders");

var _ArcBorders3 = _interopRequireDefault(_ArcBorders2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RoundLoading(center, radiuses, pro, inside, dif) {
    var _ArcBorders = (0, _ArcBorders3.default)(pro, inside, dif),
        start = _ArcBorders.start,
        end = _ArcBorders.end;

    return (0, _FilledArc2.default)(center, radiuses, start, end);
}

var LoadedGraph = function LoadedGraph(_ref) {
    var cx = _ref.cx,
        cy = _ref.cy,
        r1 = _ref.r1,
        r2 = _ref.r2,
        pro = _ref.pro,
        inside = _ref.inside,
        dif = _ref.dif,
        className = _ref.className,
        id = _ref.id,
        fill = _ref.fill,
        fillOpacity = _ref.fillOpacity,
        stroke = _ref.stroke,
        strokeWidth = _ref.strokeWidth,
        style = _ref.style;
    return _react2.default.createElement("path", {
        fill: fill,
        fillOpacity: fillOpacity,
        stroke: stroke,
        strokeWidth: strokeWidth,
        style: style,
        d: RoundLoading({ x: cx, y: cy }, [r1, r2], pro, inside, dif),
        className: className, id: id
    });
};
exports.default = LoadedGraph;