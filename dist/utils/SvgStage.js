"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _SvgCoordinates = require("./SvgCoordinates");

var _SvgCoordinates2 = _interopRequireDefault(_SvgCoordinates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SvgStage = function (_Component) {
    _inherits(SvgStage, _Component);

    function SvgStage() {
        _classCallCheck(this, SvgStage);

        return _possibleConstructorReturn(this, (SvgStage.__proto__ || Object.getPrototypeOf(SvgStage)).apply(this, arguments));
    }

    _createClass(SvgStage, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var $this = _reactDom2.default.findDOMNode(this);
            if (this.props.stage) {
                this.props.stage.convert = function (event) {
                    return (0, _SvgCoordinates2.default)($this, event);
                };
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                children = _props.children,
                props = _objectWithoutProperties(_props, ["children"]);

            delete props.stage;
            return _react2.default.createElement(
                "svg",
                props,
                children
            );
        }
    }]);

    return SvgStage;
}(_react.Component);

exports.default = SvgStage;