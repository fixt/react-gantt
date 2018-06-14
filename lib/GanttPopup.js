'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GanttPopup = (_temp = _class = function (_Component) {
  _inherits(GanttPopup, _Component);

  function GanttPopup() {
    _classCallCheck(this, GanttPopup);

    return _possibleConstructorReturn(this, (GanttPopup.__proto__ || Object.getPrototypeOf(GanttPopup)).apply(this, arguments));
  }

  _createClass(GanttPopup, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          style = _props.style,
          markerTime = _props.markerTime,
          activeStep = _props.activeStep,
          titleStyle = _props.titleStyle,
          renderPopupDetails = _props.renderPopupDetails;
      var dateFormat = this.context.dateFormat;

      return _react2.default.createElement(
        'div',
        { style: style },
        _react2.default.createElement(
          'span',
          { style: titleStyle },
          title
        ),
        renderPopupDetails(activeStep.name, (0, _moment2.default)(markerTime).format(dateFormat))
      );
    }
  }]);

  return GanttPopup;
}(_react.Component), _class.propTypes = {
  style: _propTypes2.default.object.isRequired,
  markerTime: _propTypes2.default.object.isRequired,
  activeStep: _propTypes2.default.object.isRequired,
  title: _propTypes2.default.string.isRequired,
  titleStyle: _propTypes2.default.object,
  renderPopupDetails: _propTypes2.default.func
}, _class.contextTypes = {
  dateFormat: _propTypes2.default.string.isRequired
}, _class.defaultProps = {
  titleStyle: {
    display: 'block',
    marginBottom: '10px',
    fontWeight: 'bold',
    borderBottom: '1px solid #cfcfcf'
  },
  renderPopupDetails: function renderPopupDetails(stepName, markerTime) {
    return _react2.default.createElement(
      'span',
      null,
      markerTime,
      _react2.default.createElement('br', null),
      stepName
    );
  }
}, _temp);
exports.default = GanttPopup;