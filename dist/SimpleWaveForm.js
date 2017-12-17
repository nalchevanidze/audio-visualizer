"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _FlatSoundForm = require("./RadialMath/FlatSoundForm");

var _FlatSoundForm2 = _interopRequireDefault(_FlatSoundForm);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cache = {};

var WaveForm = function (_React$Component) {
    _inherits(WaveForm, _React$Component);

    function WaveForm(props) {
        _classCallCheck(this, WaveForm);

        var _this = _possibleConstructorReturn(this, (WaveForm.__proto__ || Object.getPrototypeOf(WaveForm)).call(this, props));

        _this.state = {
            form: [],
            data: []
        };
        return _this;
    }

    _createClass(WaveForm, [{
        key: "WaveFormRequest",
        value: function WaveFormRequest() {
            var _this2 = this;

            var _props = this.props,
                url = _props.url,
                _props$height = _props.height,
                height = _props$height === undefined ? 50 : _props$height,
                _props$width = _props.width,
                width = _props$width === undefined ? 500 : _props$width,
                _props$stepSize = _props.stepSize,
                stepSize = _props$stepSize === undefined ? 2 : _props$stepSize;

            stepSize = Math.max(1, stepSize);
            this.state.url = url;
            if (cache[url]) {
                this.setState({ form: cache[url] });
            } else {
                _axios2.default.get(url + ".json").then(function (_ref) {
                    var data = _ref.data;


                    var form = (0, _FlatSoundForm2.default)(data, { width: width, height: height, resolution: width / stepSize });
                    cache[url] = form;
                    _this2.setState({ form: form, data: data });
                });
            }
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this.WaveFormRequest();
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps() {
            this.WaveFormRequest();
        }
    }, {
        key: "render",
        value: function render() {
            var _props2 = this.props,
                _props2$color = _props2.color,
                color = _props2$color === undefined ? "#777" : _props2$color,
                _props2$strokeWidth = _props2.strokeWidth,
                strokeWidth = _props2$strokeWidth === undefined ? 1 : _props2$strokeWidth,
                _props2$height = _props2.height,
                height = _props2$height === undefined ? 50 : _props2$height,
                _props2$width = _props2.width,
                width = _props2$width === undefined ? 500 : _props2$width;

            return _react2.default.createElement(
                "svg",
                { viewBox: [0, -height / 2, width, height].join(" ") },
                _react2.default.createElement("path", {
                    stroke: color,
                    d: this.state.form,
                    strokeWidth: strokeWidth
                })
            );
        }
    }]);

    return WaveForm;
}(_react2.default.Component);

exports.default = WaveForm;