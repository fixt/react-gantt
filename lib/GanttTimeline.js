'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GanttTimeline = (_temp2 = _class = function (_Component) {
  _inherits(GanttTimeline, _Component);

  function GanttTimeline() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GanttTimeline);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GanttTimeline.__proto__ || Object.getPrototypeOf(GanttTimeline)).call.apply(_ref, [this].concat(args))), _this), _this.units = {
      minute: 60,
      hour: 3600,
      day: 86400,
      week: 604800,
      month: 2628000,
      year: 31535965.4396976
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GanttTimeline, [{
    key: 'getTick',
    value: function getTick(unit, timelineDuration) {
      var _props = this.props,
          style = _props.style,
          scalingFactor = _props.scalingFactor;
      var _context = this.context,
          leftBound = _context.leftBound,
          rightBound = _context.rightBound,
          timelineWidth = _context.timelineWidth;

      if (!unit) {
        timelineDuration = (0, _moment2.default)(rightBound).diff((0, _moment2.default)(leftBound), 'seconds');
        unit = this.getTimespanUnit(timelineDuration);
      }
      var tickCount = Math.ceil(timelineDuration / this.units[unit]) * scalingFactor;
      var maxTicks = Math.ceil(timelineWidth / parseInt(style.minWidth, 10));
      if (tickCount > maxTicks) {
        var unitKeys = _lodash2.default.keys(this.units);
        var nextUnitIndex = unitKeys.indexOf(unit) + 1;
        if (unitKeys.length > nextUnitIndex) {
          unit = unitKeys[nextUnitIndex];
          return this.getTick(unit, timelineDuration);
        }
      }
      return {
        width: this.durationToWidth(this.units[unit]),
        unit: unit,
        count: tickCount
      };
    }
  }, {
    key: 'getTimespanUnit',
    value: function getTimespanUnit(duration) {
      if (duration / this.units.year >= 3) return 'year';
      if (duration / this.units.month >= 3) return 'month';
      if (duration / this.units.week >= 3) return 'week';
      if (duration / this.units.day >= 3) return 'day';
      if (duration / this.units.hour >= 3) return 'hour';
      if (duration / this.units.minute >= 3) return 'minute';
      return 'second';
    }
  }, {
    key: 'getTimeFormat',
    value: function getTimeFormat(unit) {
      switch (unit) {
        case 'second':
          return this.context.secondFormat;
        case 'minute':
          return this.context.minuteFormat;
        case 'hour':
          return this.context.hourFormat;
        case 'day':
          return this.context.dayFormat;
        case 'week':
          return this.context.weekFormat;
        case 'month':
          return this.context.monthFormat;
        case 'year':
          return this.context.yearFormat;
      }
      return null;
    }
  }, {
    key: 'durationToWidth',
    value: function durationToWidth(duration) {
      var _context2 = this.context,
          leftBound = _context2.leftBound,
          rightBound = _context2.rightBound,
          timelineWidth = _context2.timelineWidth;
      var scalingFactor = this.props.scalingFactor;

      var timelineDuration = (0, _moment2.default)(rightBound).diff(leftBound, 'seconds');
      var percentage = duration > 0 ? duration / timelineDuration : 0;
      return timelineWidth * percentage / scalingFactor;
    }
  }, {
    key: 'widthToDuration',
    value: function widthToDuration(width) {
      var _context3 = this.context,
          leftBound = _context3.leftBound,
          rightBound = _context3.rightBound,
          timelineWidth = _context3.timelineWidth;

      var timelineDuration = (0, _moment2.default)(rightBound).diff(leftBound, 'seconds');
      var pixelPerSecond = timelineDuration / timelineWidth;
      return pixelPerSecond * width;
    }
  }, {
    key: 'debugRender',
    value: function debugRender() {
      var _context4 = this.context,
          leftBound = _context4.leftBound,
          rightBound = _context4.rightBound,
          dateFormat = _context4.dateFormat,
          timelineWidth = _context4.timelineWidth;

      var tick = this.getTick();
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          'Timeline Width: ',
          timelineWidth,
          _react2.default.createElement('br', null),
          'Left Bound: ',
          (0, _moment2.default)(leftBound).format(dateFormat),
          _react2.default.createElement('br', null),
          'Right Bound: ',
          (0, _moment2.default)(rightBound).format(dateFormat),
          _react2.default.createElement('br', null),
          'Tick Unit: ',
          tick.unit,
          _react2.default.createElement('br', null),
          'Tick Width: ',
          tick.width,
          _react2.default.createElement('br', null),
          'Tick Count: ',
          tick.count
        ),
        _react2.default.createElement(
          'div',
          null,
          this.defaultRender()
        )
      );
    }
  }, {
    key: 'defaultRender',
    value: function defaultRender() {
      var _this2 = this;

      var style = _lodash2.default.clone(this.props.style);
      var tick = this.getTick();
      var tickWidth = _lodash2.default.clone(parseInt(style.tickWidth, 10)) || 2;
      var paddingLeft = _lodash2.default.clone(parseInt(style.paddingLeft, 10)) || 4;
      delete style.paddingLeft;
      return _react2.default.createElement(
        'div',
        {
          style: {
            display: 'flex',
            justifyContent: 'flex-start'
          }
        },
        _lodash2.default.map(_lodash2.default.range(tick.count), function (index) {
          return _react2.default.createElement(
            'div',
            {
              key: 'tick' + index,
              style: _extends({}, style, {
                height: '20px',
                borderLeft: tickWidth + 'px solid black',
                width: tick.width - paddingLeft - tickWidth + 'px',
                float: 'left',
                margin: '0px',
                padding: '0px',
                textAlign: 'left',
                paddingLeft: paddingLeft + 'px'
              })
            },
            _this2.renderTickLabel(tick, index)
          );
        })
      );
    }
  }, {
    key: 'renderTickLabel',
    value: function renderTickLabel(tick, index) {
      var leftBound = this.context.leftBound;

      var tickTime = (0, _moment2.default)(leftBound).add(this.widthToDuration(tick.width) * index, 'seconds');
      var format = this.getTimeFormat(tick.unit);
      return tickTime.format(format);
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.context.debug) return this.debugRender();
      return this.defaultRender();
    }
  }]);

  return GanttTimeline;
}(_react.Component), _class.propTypes = {
  style: _propTypes2.default.object.isRequired,
  scalingFactor: _propTypes2.default.number
}, _class.defaultProps = {
  scalingFactor: 1.0
}, _class.contextTypes = {
  dateFormat: _propTypes2.default.string.isRequired,
  timeFormat: _propTypes2.default.string,
  secondFormat: _propTypes2.default.string,
  hourFormat: _propTypes2.default.string,
  dayFormat: _propTypes2.default.string,
  weekFormat: _propTypes2.default.string,
  monthFormat: _propTypes2.default.string,
  yearFormat: _propTypes2.default.string,
  debug: _propTypes2.default.bool.isRequired,
  leftBound: _propTypes2.default.object.isRequired,
  rightBound: _propTypes2.default.object.isRequired,
  timelineWidth: _propTypes2.default.number.isRequired
}, _temp2);
exports.default = GanttTimeline;