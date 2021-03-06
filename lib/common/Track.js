'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Track = function Track(_ref) {
  var className = _ref.className,
      included = _ref.included,
      vertical = _ref.vertical,
      offset = _ref.offset,
      length = _ref.length,
      minimumTrackStyle = _ref.minimumTrackStyle;

  var style = {
    visibility: included ? 'visible' : 'hidden'
  };
  if (vertical) {
    style.bottom = offset + '%';
    style.height = length + '%';
  } else {
    style.left = offset + '%';
    style.width = length + '%';
  }

  return _react2["default"].createElement('div', { className: className, style: (0, _objectAssign2["default"])({}, style, minimumTrackStyle) });
};

exports["default"] = Track;
module.exports = exports['default'];