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

        _this.state = { form: [] };
        return _this;
    }

    _createClass(WaveForm, [{
        key: "WaveFormRequest",
        value: function WaveFormRequest() {
            var _this2 = this;

            var url = this.props.url;

            this.state.url = url;
            if (cache[url]) {

                this.setState({ form: cache[url] });
            } else {
                _axios2.default.get("http://nalchevanidze.com/resource/audio/" + url + ".json").then(function (_ref) {
                    var data = _ref.data;


                    var form = (0, _FlatSoundForm2.default)(data, { width: 500, height: 50, resolution: 200 });

                    cache[url] = form;

                    _this2.setState({ form: form });
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
            return _react2.default.createElement(
                "svg",
                { viewBox: "0 -25 500 50" },
                _react2.default.createElement("path", { d: this.state.form, className: "prime" }),
                _react2.default.createElement("path", { d: "M0 0 L500 0", className: "stepper" })
            );
        }
    }]);

    return WaveForm;
}(_react2.default.Component);

exports.default = WaveForm;