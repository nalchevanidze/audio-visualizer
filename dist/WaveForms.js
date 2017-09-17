"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Circle = require("./RadialMath/Circle");

var _Circle2 = _interopRequireDefault(_Circle);

var _RoundStatistic = require("./RadialMath/RoundStatistic");

var _RoundStatistic2 = _interopRequireDefault(_RoundStatistic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WaveForms = function WaveForms(_ref) {
    var cx = _ref.cx,
        cy = _ref.cy,
        r1 = _ref.r1,
        r2 = _ref.r2,
        r3 = _ref.r3,
        fr = _ref.fr,
        spec = _ref.spec;


    var center = { x: cx, y: cy };

    var srstat = function srstat(freq, r, l) {
        return (0, _RoundStatistic2.default)(freq || [0, 0], center, r, l, r1);
    };

    var arc80 = (0, _Circle2.default)({ center: { x: cx, y: cy }, radius: r1 });

    var dp = r3 - r1,
        ir = (r3 + r2) / 2,
        k = 1 / 128;

    return _react2.default.createElement(
        "g",
        { className: "waves prime" },
        _react2.default.createElement(
            "g",
            { fillRule: "evenodd", fill: "#7b838a" },
            _react2.default.createElement("path", {

                d: srstat(fr, ir + 20, -k * (r3 - r2) * 3) + "  " + arc80,
                fillOpacity: 0.2
            }),
            _react2.default.createElement("path", {
                d: srstat(spec, r2, k * (r1 - r2)) + "  " + arc80,
                fillOpacity: 0.6
            })
        ),
        _react2.default.createElement("circle", {
            cx: cx,
            cy: cy,
            r: r3,
            fill: "none",
            stroke: "white",
            strokeDasharray: "0.5 4",
            style: { strokeWidth: dp * 2 }
        })
    );
};
exports.default = WaveForms;