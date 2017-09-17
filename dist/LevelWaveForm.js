"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _CircleSoundForm = require("./RadialMath/CircleSoundForm");

var _CircleSoundForm2 = _interopRequireDefault(_CircleSoundForm);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WaveForm = function (_React$Component) {
    _inherits(WaveForm, _React$Component);

    function WaveForm(props) {
        _classCallCheck(this, WaveForm);

        var _this = _possibleConstructorReturn(this, (WaveForm.__proto__ || Object.getPrototypeOf(WaveForm)).call(this, props));

        _this.state = {
            form: [] };
        return _this;
    }

    _createClass(WaveForm, [{
        key: "getWaveJson",
        value: function getWaveJson() {
            var _this2 = this;

            var _props = this.props,
                cx = _props.cx,
                cy = _props.cy,
                r1 = _props.r1,
                r2 = _props.r2,
                map = _props.map;

            this.state.map = map;
            _axios2.default.get(map).then(function (_ref) {
                var data = _ref.data;


                _this2.setState({ form: (0, _CircleSoundForm2.default)(data, {
                        cx: cx,
                        cy: cy,
                        c: (r2 + r1) / 2,
                        w: r2 - r1
                    }) });
            });
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(p) {
            if (p.map !== this.state.map) {
                this.getWaveJson();
            }
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this.getWaveJson();
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement("path", { d: this.state.form, className: "prime" });
        }
    }]);

    return WaveForm;
}(_react2.default.Component);

exports.default = WaveForm;