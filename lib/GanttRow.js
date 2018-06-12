'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GanttBar = require('./GanttBar');

var _GanttBar2 = _interopRequireDefault(_GanttBar);

var _GanttPopup = require('./GanttPopup');

var _GanttPopup2 = _interopRequireDefault(_GanttPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GanttRow = (0, _autobindDecorator2.default)(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(GanttRow, _Component);

  function GanttRow() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GanttRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GanttRow.__proto__ || Object.getPrototypeOf(GanttRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      active: false,
      mouse: {},
      activeStep: {},
      markerTime: (0, _moment2.default)().toDate()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GanttRow, [{
    key: 'getStepFromTime',
    value: function getStepFromTime(time) {
      var _props = this.props,
          steps = _props.steps,
          templateName = _props.templateName;
      var templates = this.context.templates;

      var templateStep = {};
      var templateSteps = templates[templateName].steps;
      _lodash2.default.each(steps, function (step, index) {
        if ((0, _moment2.default)(time).isAfter(step) && (0, _moment2.default)(time).isBefore(steps[index + 1])) {
          templateStep = templateSteps[index];
          return false;
        }
        return true;
      });
      return templateStep;
    }
  }, {
    key: 'getMargin',
    value: function getMargin(margin) {
      var marginTop = '0px';
      var marginRight = '0px';
      var marginBottom = '0px';
      var marginLeft = '0px';
      margin = margin ? margin.split(' ') : [];
      switch (margin.length) {
        case 1:
          var _margin = margin;

          var _margin2 = _slicedToArray(_margin, 1);

          marginTop = _margin2[0];
          var _margin3 = margin;

          var _margin4 = _slicedToArray(_margin3, 1);

          marginRight = _margin4[0];
          var _margin5 = margin;

          var _margin6 = _slicedToArray(_margin5, 1);

          marginBottom = _margin6[0];
          var _margin7 = margin;

          var _margin8 = _slicedToArray(_margin7, 1);

          marginLeft = _margin8[0];

          break;
        case 2:
          var _margin9 = margin;

          var _margin10 = _slicedToArray(_margin9, 1);

          marginTop = _margin10[0];
          var _margin11 = margin;

          var _margin12 = _slicedToArray(_margin11, 2);

          marginRight = _margin12[1];
          var _margin13 = margin;

          var _margin14 = _slicedToArray(_margin13, 1);

          marginBottom = _margin14[0];
          var _margin15 = margin;

          var _margin16 = _slicedToArray(_margin15, 2);

          marginLeft = _margin16[1];

          break;
        case 4:
          var _margin17 = margin;

          var _margin18 = _slicedToArray(_margin17, 1);

          marginTop = _margin18[0];
          var _margin19 = margin;

          var _margin20 = _slicedToArray(_margin19, 2);

          marginRight = _margin20[1];
          var _margin21 = margin;

          var _margin22 = _slicedToArray(_margin21, 3);

          marginBottom = _margin22[2];
          var _margin23 = margin;

          var _margin24 = _slicedToArray(_margin23, 4);

          marginLeft = _margin24[3];

          break;
      }
      return {
        marginTop: marginTop,
        marginRight: marginRight,
        marginBottom: marginBottom,
        marginLeft: marginLeft
      };
    }
  }, {
    key: 'handleMouseEnter',
    value: function handleMouseEnter() {
      var _this2 = this;

      this.setState({ active: true });
      // eslint-disable-next-line no-undef
      this.mouseEventListener = window.addEventListener('mousemove', function (e) {
        return _this2.handleMouseMove(e);
      });
    }
  }, {
    key: 'handleMouseLeave',
    value: function handleMouseLeave() {
      this.setState({ active: false });
      if (this.mouseEventListener) {
        this.mouseEventListener.removeEventListener();
      }
    }
  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(e) {
      if (this.state.active) {
        var leftBound = this.context.leftBound;

        var markerTime = (0, _moment2.default)(leftBound).add(this.widthToDuration(e.offsetX), 'seconds').toDate();
        this.setState({
          mouse: e,
          markerTime: markerTime,
          activeStep: this.getStepFromTime(markerTime)
        });
      }
    }
  }, {
    key: 'calculateBarStyle',
    value: function calculateBarStyle(barStyle) {
      barStyle = _lodash2.default.clone(barStyle);
      var margin = this.getMargin(barStyle.margin);
      var marginTop = barStyle.marginTop || margin.marginTop;
      var marginBottom = barStyle.marginBottom || margin.marginBottom;
      delete barStyle.marginTop;
      delete barStyle.marginBottom;
      delete barStyle.margin;
      return {
        barStyle: barStyle,
        barWrapperStyle: {
          marginTop: marginTop,
          marginBottom: marginBottom
        }
      };
    }
  }, {
    key: 'widthToDuration',
    value: function widthToDuration(width) {
      var _context = this.context,
          leftBound = _context.leftBound,
          rightBound = _context.rightBound,
          timelineWidth = _context.timelineWidth;

      var timelineDuration = (0, _moment2.default)(rightBound).diff(leftBound, 'seconds');
      var pixelPerSecond = timelineDuration / timelineWidth;
      return pixelPerSecond * width;
    }
  }, {
    key: 'renderPopup',
    value: function renderPopup() {
      var _props2 = this.props,
          popupStyle = _props2.popupStyle,
          title = _props2.title,
          renderPopupDetails = _props2.renderPopupDetails;
      var _state = this.state,
          activeStep = _state.activeStep,
          markerTime = _state.markerTime,
          active = _state.active;

      return _react2.default.createElement(
        'div',
        {
          style: {
            position: 'absolute',
            left: this.state.mouse.offsetX + 'px',
            display: active ? 'inherit' : 'none'
          }
        },
        _react2.default.createElement(_GanttPopup2.default, {
          style: popupStyle,
          title: title,
          activeStep: activeStep,
          markerTime: markerTime,
          renderPopupDetails: renderPopupDetails
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          title = _props3.title,
          markerStyle = _props3.markerStyle,
          templateName = _props3.templateName,
          steps = _props3.steps;
      var active = this.state.active;

      var tdStyle = { whiteSpace: 'nowrap' };

      var _calculateBarStyle = this.calculateBarStyle(this.props.barStyle),
          barStyle = _calculateBarStyle.barStyle,
          barWrapperStyle = _calculateBarStyle.barWrapperStyle;

      return _react2.default.createElement(
        'tr',
        { style: { cursor: 'inherit' } },
        _react2.default.createElement(
          'td',
          {
            style: _extends({}, tdStyle, {
              width: '0px'
            })
          },
          title
        ),
        _react2.default.createElement(
          'td',
          {
            style: _extends({}, tdStyle, {
              width: '100%'
            })
          },
          _react2.default.createElement(
            'div',
            { style: barWrapperStyle },
            _react2.default.createElement(_GanttBar2.default, {
              title: title,
              templateName: templateName,
              steps: steps,
              style: barStyle
            }),
            _react2.default.createElement('div', {
              style: _extends({}, markerStyle, {
                height: barStyle.height,
                marginTop: '-' + barStyle.height,
                position: 'relative',
                marginLeft: this.state.mouse.offsetX - parseInt(markerStyle.width, 10) / 2 + 'px',
                zIndex: 0,
                display: active ? 'inherit' : 'none'
              })
            }),
            _react2.default.createElement('div', {
              style: {
                height: barStyle.height,
                marginTop: '-' + barStyle.height,
                position: 'relative',
                zIndex: 0
              },
              onMouseEnter: this.handleMouseEnter,
              onMouseLeave: this.handleMouseLeave
            })
          ),
          this.renderPopup()
        )
      );
    }
  }]);

  return GanttRow;
}(_react.Component), _class2.propTypes = {
  barStyle: _propTypes2.default.object,
  popupStyle: _propTypes2.default.object,
  markerStyle: _propTypes2.default.object,
  steps: _propTypes2.default.array.isRequired,
  templateName: _propTypes2.default.string,
  title: _propTypes2.default.string,
  renderPopupDetails: _propTypes2.default.func
}, _class2.contextTypes = {
  templates: _propTypes2.default.object.isRequired,
  dateFormat: _propTypes2.default.string.isRequired,
  leftBound: _propTypes2.default.object.isRequired,
  rightBound: _propTypes2.default.object.isRequired,
  timelineWidth: _propTypes2.default.number.isRequired,
  debug: _propTypes2.default.bool.isRequired,
  renderPopupDetails: _propTypes2.default.func
}, _class2.defaultProps = {
  barStyle: {
    height: '80px',
    marginTop: '10px',
    marginBottom: '10px'
  },
  popupStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    padding: '15px',
    boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.75)',
    borderRadius: '5px'
  },
  markerStyle: {
    width: '40px',
    backgroundColor: '#000000',
    opacity: 0.5
  },
  templateName: 'default',
  title: '',
  renderPopupDetails: function renderPopupDetails() {}
}, _temp2)) || _class;

exports.default = GanttRow;