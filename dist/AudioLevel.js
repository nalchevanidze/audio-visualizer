"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _LoadedGraph = require("./LoadedGraph");

var _LoadedGraph2 = _interopRequireDefault(_LoadedGraph);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AudioLevel = function (_React$Component) {
    _inherits(AudioLevel, _React$Component);

    function AudioLevel(props) {
        _classCallCheck(this, AudioLevel);

        var _this = _possibleConstructorReturn(this, (AudioLevel.__proto__ || Object.getPrototypeOf(AudioLevel)).call(this, props));

        _this.state = { levelmove: false, gain: 0.5 };
        _this.hide = false;
        _this.levelMove = _this.levelMove.bind(_this);
        _this.mouseUp = _this.listenLevel.bind(_this, false);
        _this.mouseDown = _this.listenLevel.bind(_this, true);
        return _this;
    }

    _createClass(AudioLevel, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var target = _reactDom2.default.findDOMNode(this);
            target.addEventListener("mousemove", this.levelMove, false);
            target.addEventListener("mouseup", this.mouseUp, false);
            target.addEventListener("mousedown", this.mouseDown, false);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.hide = true;
            var target = _reactDom2.default.findDOMNode(this);
            target.removeEventListener("mousemove", this.levelMove, false);
            target.removeEventListener("mouseup", this.mouseUp, false);
            target.removeEventListener("mousedown", this.mouseDown, false);
        }
    }, {
        key: "levelMove",
        value: function levelMove(event) {
            var _props = this.props,
                convert = _props.convert,
                gain = _props.gain,
                cx = _props.cx,
                cy = _props.cy,
                r1 = _props.r1,
                r2 = _props.r2;

            if (!this.hide) {
                if (this.state.levelmove) {

                    var position = convert(event),
                        centerDiference = { x: position.x - cx, y: position.y - cy },
                        distance = Math.sqrt(Math.pow(centerDiference.x, 2) + Math.pow(centerDiference.y, 2)),
                        newGain = (distance - r1) / (r2 - r1);

                    newGain = newGain > 0.98 ? 0.98 : newGain;
                    newGain = newGain < 0.05 ? 0.05 : newGain;
                    this.setState({ gain: newGain });
                    gain.value = Math.pow(newGain, 2);
                }
            }
        }
    }, {
        key: "listenLevel",
        value: function listenLevel(e, a) {
            if (!this.hide) {
                var t = e && a.target && a.target.id && a.target.id === "levelgain" || false;
                this.setState({ levelmove: t });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var i = this.props;
            return _react2.default.createElement(
                "g",
                { className: "gainer", fill: "#BBB", stroke: "#BBB", strokeWidth: 0.5 },
                _react2.default.createElement(
                    "g",
                    null,
                    _react2.default.createElement(_LoadedGraph2.default, {
                        stroke: "none",
                        cx: i.cx,
                        cy: i.cy,
                        r1: i.r1 + (i.r2 - i.r1) * this.state.gain,
                        r2: i.r1,
                        pro: 1,
                        inside: [40, -40],
                        fillOpacity: 0.7
                    }),
                    _react2.default.createElement(_LoadedGraph2.default, {
                        cx: i.cx,
                        cy: i.cy,
                        r1: i.r1 + (i.r2 - i.r1) * this.state.gain,
                        r2: i.r1,
                        pro: 1,
                        inside: [-40, 40],
                        fillOpacity: 0.4
                    })
                ),
                _react2.default.createElement(_LoadedGraph2.default, {
                    id: "levelgain",
                    cx: i.cx,
                    cy: i.cy,
                    r1: i.r1,
                    r2: i.r2,
                    pro: 1,
                    inside: [40, -40]
                    //styles
                    , fill: "black",
                    fillOpacity: "0",
                    style: { cursor: "pointer" }
                })
            );
        }
    }]);

    return AudioLevel;
}(_react2.default.Component);

exports.default = AudioLevel;