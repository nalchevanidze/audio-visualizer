"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _LevelWaveForm = require("./LevelWaveForm");

var _LevelWaveForm2 = _interopRequireDefault(_LevelWaveForm);

var _DynamicGraphics = require("./DynamicGraphics");

var _DynamicGraphics2 = _interopRequireDefault(_DynamicGraphics);

var _AudioLevel = require("./AudioLevel");

var _AudioLevel2 = _interopRequireDefault(_AudioLevel);

var _LoadedGraph = require("./LoadedGraph");

var _LoadedGraph2 = _interopRequireDefault(_LoadedGraph);

var _AudioPlayer = require("./AudioPlayer");

var _AudioPlayer2 = _interopRequireDefault(_AudioPlayer);

var _SvgStage = require("./utils/SvgStage");

var _SvgStage2 = _interopRequireDefault(_SvgStage);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ProcentFromAngle(angle, limit) {
    var d = angle * 180 / Math.PI - 90 + 40;
    d = d < 0 ? 360 + d : d;
    var procent = (360 - d) / limit;
    return procent > 1 ? 1 : procent;
}

var AudioVisualizer = function (_React$Component) {
    _inherits(AudioVisualizer, _React$Component);

    function AudioVisualizer(props) {
        _classCallCheck(this, AudioVisualizer);

        var _this = _possibleConstructorReturn(this, (AudioVisualizer.__proto__ || Object.getPrototypeOf(AudioVisualizer)).call(this, props));

        _this.hide = false;
        _this.stage = {};
        var gainer = _AudioPlayer2.default.gainer,
            waveForm = _AudioPlayer2.default.waveForm,
            audio = _AudioPlayer2.default.audio;

        _this.gainer = gainer;
        _this.waveForm = waveForm;
        _this.state = {
            mode: "paused",
            data: null,
            levelArray: [],
            fr: waveForm.fr,
            spec: waveForm.spec,
            pro: 0,
            time: 0,
            audio: audio
        };
        _this.playAt = _this.playAt.bind(_this);
        _this.updatewave = _this.updatewave.bind(_this);
        return _this;
    }

    _createClass(AudioVisualizer, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var _props = this.props,
                par = _props.par,
                src = _props.src,
                play = _props.play;
            var audio = this.state.audio,
                updatewave = this.updatewave;


            par.rt = (audio.currentTime || 0).toFixed(1) * 2 / 10;
            this.par = par;

            if (src) {
                audio.src = src + ".mp3";
                if (play) {
                    audio.playNew(src);
                }
                this.gainer.gain.setValueAtTime(0.1, 0);
                updatewave();
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            _reactDom2.default.findDOMNode(this).addEventListener("mousedown", this.playAt, false);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(next) {
            if (next.src) {
                this.state.audio.playNew(next.src);
            } else if (next.play) {
                this.state.audio.play();
            } else {
                this.state.audio.pause();
            }
        }
    }, {
        key: "updatewave",
        value: function updatewave() {
            if (!this.hide) {
                requestAnimationFrame(this.updatewave);
                if (!this.state.audio.paused) {
                    var audio = this.state.audio;
                    this.state.mode = "play";
                    this.waveForm.render();
                    var pro = audio.currentTime / audio.duration;
                    this.setState({
                        pro: isNaN(pro) ? 0 : pro,
                        time: audio.currentTime
                    });
                } else if (this.state.mode === "play") {
                    this.setState({ mode: "paused" });
                }
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.hide = true;
            this.state.audio.pause();
            _reactDom2.default.findDOMNode(this).removeEventListener("mousedown", this.playAt, false);
        }
    }, {
        key: "playAt",
        value: function playAt(event) {
            var target = event.target;

            if (!target || target.id !== "play_at") {
                return null;
            }

            var limit = 360 - 2 * 40,
                _stage$convert = this.stage.convert(event),
                x = _stage$convert.x,
                y = _stage$convert.y,
                _par = this.par,
                cx = _par.cx,
                cy = _par.cy;


            var angle = Math.atan2(x - cx, y - cy),
                pro = ProcentFromAngle(angle, limit),
                time = this.state.audio.duration * pro;
            this.state.audio.currentTime = time;
            this.setState({ time: time, pro: pro });
        }
    }, {
        key: "render",
        value: function render() {
            var p = this.par;
            var state = this.state,
                stage = this.stage;

            return _react2.default.createElement(
                _SvgStage2.default,
                { viewBox: "0 0 200 200", height: "400px", id: "stage", stage: this.stage },
                _react2.default.createElement(
                    "g",
                    { className: "static" },
                    _react2.default.createElement("circle", {
                        cx: p.cx,
                        cy: p.cy,
                        r: p.r2,
                        fillOpacity: 0.02 }),
                    _react2.default.createElement(_LevelWaveForm2.default, _extends({}, this.par, {
                        map: this.props.src + ".json",
                        fillOpacity: 0.8 })),
                    "/>"
                ),
                _react2.default.createElement(_DynamicGraphics2.default, _extends({}, state, { par: this.par, toggle: state.audio.toggle })),
                _react2.default.createElement(_AudioLevel2.default, {
                    cx: p.cx, cy: p.cy, r1: p.r1, r2: p.r2,
                    gain: this.gainer.gain,
                    convert: stage.convert
                }),
                _react2.default.createElement(_LoadedGraph2.default, {
                    fillOpacity: 0,
                    id: "play_at",
                    cx: p.cx, cy: p.cy, r1: p.r1, r2: p.r2, pro: 1,
                    inside: [-40, 40]
                })
            );
        }
    }]);

    return AudioVisualizer;
}(_react2.default.Component);

exports.default = AudioVisualizer;