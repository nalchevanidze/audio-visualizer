"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = FlatSoundForm;

var _LinearStatistic = require("./LinearStatistic");

var _LinearStatistic2 = _interopRequireDefault(_LinearStatistic);

var _ResoluteArray = require("./ResoluteArray");

var _ResoluteArray2 = _interopRequireDefault(_ResoluteArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FlatSoundForm(WaveArray, props) {
    var width = props.width,
        height = props.height,
        resolution = props.resolution;


    if (resolution) {
        resolution = Number(resolution);
        if (isNaN(resolution)) {
            throw new Error("FlatSoundForm.js : False Resolution");
        }

        WaveArray = (0, _ResoluteArray2.default)(WaveArray, resolution);
    }

    if (WaveArray.length < 2) {
        return "";
    }

    var stepSize = props.width / resolution;

    return WaveArray.map(function (e, index) {
        return " M" + index * stepSize + " " + e * height + " " + index * stepSize + " -" + e * height + " ";
    }).join(" ");

    // return "M" + [
    //     LinearStatistic( WaveArray , width , height ),
    //     LinearStatistic( WaveArray , width , -height ).reverse()
    // ].join(" ")+ "z";
}