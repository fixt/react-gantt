'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GanttRow = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _GanttRow = require('./GanttRow');

Object.defineProperty(exports, 'GanttRow', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_GanttRow).default;
  }
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _GanttTimeline = require('./GanttTimeline');

var _GanttTimeline2 = _interopRequireDefault(_GanttTimeline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactGantt = (_temp2 = _class = function (_Component) {
  _inherits(ReactGantt, _Component);

  function ReactGantt() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ReactGantt);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactGantt.__proto__ || Object.getPrototypeOf(ReactGantt)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      timelineWidth: 0
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ReactGantt, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        dateFormat: this.props.dateFormat,
        dayFormat: this.props.dayFormat,
        debug: this.props.debug,
        hourFormat: this.props.hourFormat,
        leftBound: this.props.leftBound,
        minuteFormat: this.props.minuteFormat,
        monthFormat: this.props.monthFormat,
        rightBound: this.props.rightBound,
        secondFormat: this.props.secondFormat,
        templates: this.props.templates,
        timeFormat: this.props.timeFormat,
        timelineWidth: this.state.timelineWidth,
        weekFormat: this.props.weekFormat,
        yearFormat: this.props.yearFormat
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // eslint-disable-next-line no-undef
      this.resizeEventListener = window.addEventListener('resize', function (e) {
        return _this2.handleResize(e);
      });
      this.handleResize();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.resizeEventListener) {
        this.resizeEventListener.removeEventListener();
      }
    }
  }, {
    key: 'handleResize',
    value: function handleResize() {
      this.setState({ timelineWidth: this.timeline.offsetWidth });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var thStyle = { whiteSpace: 'nowrap' };
      return _react2.default.createElement(
        'div',
        { style: this.props.style },
        _react2.default.createElement(
          'table',
          { style: { width: '100%' }, cellSpacing: 0 },
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement('th', {
                style: _extends({}, thStyle, {
                  width: '0px'
                })
              }),
              _react2.default.createElement(
                'th',
                {
                  ref: function ref(c) {
                    _this3.timeline = c;
                  },
                  style: _extends({}, thStyle, {
                    width: '100%'
                  })
                },
                _react2.default.createElement(_GanttTimeline2.default, {
                  style: this.props.timelineStyle,
                  scalingFactor: this.props.scalingFactor,
                  rows: this.props.children
                })
              )
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            this.props.children
          )
        )
      );
    }
  }]);

  return ReactGantt;
}(_react.Component), _class.propTypes = {
  children: _propTypes2.default.node.isRequired,
  dateFormat: _propTypes2.default.string,
  dayFormat: _propTypes2.default.string,
  debug: _propTypes2.default.bool,
  hourFormat: _propTypes2.default.string,
  leftBound: _propTypes2.default.object,
  minuteFormat: _propTypes2.default.string,
  monthFormat: _propTypes2.default.string,
  rightBound: _propTypes2.default.object,
  secondFormat: _propTypes2.default.string,
  style: _propTypes2.default.object,
  templates: _propTypes2.default.object,
  timeFormat: _propTypes2.default.string,
  timelineStyle: _propTypes2.default.object,
  weekFormat: _propTypes2.default.string,
  yearFormat: _propTypes2.default.string,
  scalingFactor: _propTypes2.default.number
}, _class.childContextTypes = {
  dateFormat: _propTypes2.default.string.isRequired,
  dayFormat: _propTypes2.default.string,
  debug: _propTypes2.default.bool.isRequired,
  hourFormat: _propTypes2.default.string,
  leftBound: _propTypes2.default.object.isRequired,
  minuteFormat: _propTypes2.default.string,
  monthFormat: _propTypes2.default.string,
  rightBound: _propTypes2.default.object.isRequired,
  secondFormat: _propTypes2.default.string,
  templates: _propTypes2.default.object.isRequired,
  timeFormat: _propTypes2.default.string,
  timelineWidth: _propTypes2.default.number.isRequired,
  weekFormat: _propTypes2.default.string,
  yearFormat: _propTypes2.default.string
}, _class.defaultProps = {
  dateFormat: 'YY-MM-DD',
  dayFormat: 'YY-MM-DD',
  debug: false,
  hourFormat: 'HH',
  leftBound: (0, _moment2.default)().toDate(),
  minuteFormat: 'HH:MM',
  monthFormat: 'YY-MM-DD',
  rightBound: (0, _moment2.default)().toDate(),
  secondFormat: 'HH:MM:SS',
  style: {},
  templates: {},
  timeFormat: 'YY-MM-DD HH:MM',
  timelineStyle: { minWidth: '60px' },
  weekFormat: 'YY-MM-DD',
  yearFormat: 'YY-MM-DD',
  scalingFactor: 1.0
}, _temp2);
exports.default = ReactGantt;