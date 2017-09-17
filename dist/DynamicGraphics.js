"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _LoadedGraph = require("./LoadedGraph");

var _LoadedGraph2 = _interopRequireDefault(_LoadedGraph);

var _LineTime = require("./LineTime");

var _LineTime2 = _interopRequireDefault(_LineTime);

var _WaveForms = require("./WaveForms");

var _WaveForms2 = _interopRequireDefault(_WaveForms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DynamicSVG = function (_React$Component) {
    _inherits(DynamicSVG, _React$Component);

    function DynamicSVG(props) {
        _classCallCheck(this, DynamicSVG);

        var _this = _possibleConstructorReturn(this, (DynamicSVG.__proto__ || Object.getPrototypeOf(DynamicSVG)).call(this, props));

        _this.active = true;
        _this.state = { pro: 0, time: 0, audio: document.createElement("AUDIO") };
        return _this;
    }

    _createClass(DynamicSVG, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                pro = _props.pro,
                par = _props.par,
                time = _props.time,
                fr = _props.fr,
                spec = _props.spec,
                toggle = _props.toggle,
                mode = _props.mode,
                param = _extends({}, par, { pro: pro, inside: [-40, 40] }),
                lib = { play: "M20 0 L 90 50 20 100Z", paused: "M30,100V0 M70,0v100" };

            time = Math.floor(time / 60) + ":" + ("0" + Math.floor(time) % 60).slice(-2);
            var cx = param.cx,
                cy = param.cy;


            return _react2.default.createElement(
                "g",
                { className: "dynamic" },
                _react2.default.createElement(
                    "g",
                    { className: "dynamic" },
                    _react2.default.createElement(_WaveForms2.default, _extends({ fr: fr,
                        spec: spec }, par, {
                        r1: param.r2, r2: param.r3,
                        r3: param.r4
                    }))
                ),
                _react2.default.createElement(
                    "g",
                    { className: "loadedPart" },
                    _react2.default.createElement(_LoadedGraph2.default, _extends({
                        className: "loaded"
                    }, param, {
                        fill: "#FFF",
                        fillOpacity: 0.8,
                        dif: true
                    })),
                    _react2.default.createElement(
                        "g",
                        { stroke: "#FFC107" },
                        _react2.default.createElement(_LineTime2.default, _extends({

                            className: "line-time"
                        }, param, {
                            dif: true
                        }))
                    )
                ),
                _react2.default.createElement(
                    "g",
                    {
                        className: "time",
                        onClick: toggle,
                        fill: "#777",
                        style: { cursor: "pointer" }
                    },
                    _react2.default.createElement(
                        "g",
                        {
                            stroke: "#777",
                            strokeWidth: "10px",
                            strokeLinejoin: "round",
                            fillOpacity: 0,
                            strokeLinecap: "round",
                            className: "playpause-icon",
                            style: {
                                transform: "translate(" + (cx + 11) + "px," + (cy - 6) + "px) scale(0.125)"
                            }
                        },
                        _react2.default.createElement("path", { d: lib[mode], className: "play" })
                    ),
                    _react2.default.createElement(
                        "text",
                        {
                            x: param.cx - 7,
                            y: param.cy + 7,
                            className: "prime",
                            fontSize: "20px",
                            textAnchor: "middle"
                        },
                        time
                    ),
                    _react2.default.createElement("circle", {
                        cx: cx,
                        cy: cy,
                        r: param.r2,
                        fillOpacity: 0.0

                    })
                )
            );
        }
    }]);

    return DynamicSVG;
}(_react2.default.Component);

exports.default = DynamicSVG;