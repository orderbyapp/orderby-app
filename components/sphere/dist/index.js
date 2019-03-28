"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    to{\n        transform: rotate(360deg);\n    }\n"], ["\n    to{\n        transform: rotate(360deg);\n    }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n    0% {\n        transform: translateX(", "", ") translateY(", "", ") scale(1) ;\n    }\n    5% {\n        transform: translateX(-", "", ") translateY(-", "", ") scale(0);\n    }\n    50% {\n        transform: translateX(-", "", ") translateY(-", "", ") scale(0);\n    }\n    55% {\n        transform: translateX(", "", ") translateY(", "", ") scale(1) ;\n    }\n"], ["\n    0% {\n        transform: translateX(", "", ") translateY(", "", ") scale(1) ;\n    }\n    5% {\n        transform: translateX(-", "", ") translateY(-", "", ") scale(0);\n    }\n    50% {\n        transform: translateX(-", "", ") translateY(-", "", ") scale(0);\n    }\n    55% {\n        transform: translateX(", "", ") translateY(", "", ") scale(1) ;\n    }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: ", ";\n    height: ", ";\n    animation: ", " 8s linear infinite;\n"], ["\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: ", ";\n    height: ", ";\n    animation: ", " 8s linear infinite;\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n    position: absolute;\n    top: ", ";\n    left: ", ";\n    width: ", ";\n    height: ", ";\n    border-radius: 50%;\n    background-color: ", ";\n    transform: translateX(", ")\n        translateY(", ");\n    animation: ", " 5s cubic-bezier(0.165, 0.84, 0.44, 1)\n        infinite;\n    animation-delay: ", "s;\n"], ["\n    position: absolute;\n    top: ", ";\n    left: ", ";\n    width: ", ";\n    height: ", ";\n    border-radius: 50%;\n    background-color: ", ";\n    transform: translateX(", ")\n        translateY(", ");\n    animation: ", " 5s cubic-bezier(0.165, 0.84, 0.44, 1)\n        infinite;\n    animation-delay: ", "s;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var rotate = (0, _styledComponents.keyframes)(_templateObject);

var move = function move(props) {
    return (0, _styledComponents.keyframes)(_templateObject2, props.x, props.sizeUnit, props.y, props.sizeUnit, props.size / 12, props.sizeUnit, props.size / 12, props.sizeUnit, props.size / 12, props.sizeUnit, props.size / 12, props.sizeUnit, props.x, props.sizeUnit, props.y, props.sizeUnit);
};

var getBalls = function getBalls(_ref) {
    var countBalls = _ref.countBalls,
        radius = _ref.radius,
        angle = _ref.angle,
        color = _ref.color,
        size = _ref.size,
        ballSize = _ref.ballSize,
        sizeUnit = _ref.sizeUnit;

    var balls = [];
    var offset = ballSize / 2;
    for (var i = 0; i < countBalls; i++) {
        var y = Math.sin(angle * i * (Math.PI / 180)) * radius - offset;
        var x = Math.cos(angle * i * (Math.PI / 180)) * radius - offset;
        balls.push(_react2.default.createElement(Ball, {
            color: color,
            ballSize: ballSize,
            size: size,
            x: y,
            y: x,
            key: i.toString(),
            index: i,
            sizeUnit: sizeUnit
        }));
    }
    return balls;
};

var SphereSpinner = function SphereSpinner(_ref2) {
    var size = _ref2.size,
        color = _ref2.color,
        loading = _ref2.loading,
        sizeUnit = _ref2.sizeUnit;

    var radius = size / 2;
    var countBalls = 7;
    var ballSize = size / 5;
    var angle = 360 / countBalls;
    return loading && _react2.default.createElement(
        Wrapper,
        { size: size, sizeUnit: sizeUnit },
        getBalls({
            countBalls: countBalls,
            radius: radius,
            angle: angle,
            color: color,
            size: size,
            ballSize: ballSize,
            sizeUnit: sizeUnit
        })
    );
};

var Wrapper = _styledComponents2.default.div(_templateObject3, function (props) {
    return "" + props.size + props.sizeUnit;
}, function (props) {
    return "" + props.size + props.sizeUnit;
}, rotate);

var Ball = _styledComponents2.default.div(_templateObject4, function (props) {
    return "" + props.size / 2 + props.sizeUnit;
}, function (props) {
    return "" + props.size / 2 + props.sizeUnit;
}, function (props) {
    return "" + props.ballSize + props.sizeUnit;
}, function (props) {
    return "" + props.ballSize + props.sizeUnit;
}, function (props) {
    return props.color;
}, function (props) {
    return "" + props.x + props.sizeUnit;
}, function (props) {
    return "" + props.y + props.sizeUnit;
}, function (props) {
    return move(props);
}, function (props) {
    return props.index * 0.3;
});

SphereSpinner.defaultProps = {
    loading: true,
    size: 30,
    color: "#fff",
    sizeUnit: "px"
};

SphereSpinner.propTypes = {
    loading: _propTypes2.default.bool,
    size: _propTypes2.default.number,
    color: _propTypes2.default.string,
    sizeUnit: _propTypes2.default.string
};

exports.default = SphereSpinner;

//# sourceMappingURL=index.js.map