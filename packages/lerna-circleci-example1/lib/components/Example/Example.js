'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _bind = require('classnames/bind');var _bind2 = _interopRequireDefault(_bind);
var _Example = require('./Example.scss');var _Example2 = _interopRequireDefault(_Example);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var cx = _bind2.default.bind(_Example2.default);

var Example = function Example(props) {return _react2.default.createElement('div', { className: cx('style') }, _react2.default.createElement('h1', null, 'Example - ', props.name));};exports.default =

Example;