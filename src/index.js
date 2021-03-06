import PropTypes from 'prop-types';
import React, { Component } from 'react';
import moment from 'moment';
import GanttTimeline from './GanttTimeline';

export { default as GanttRow } from './GanttRow';

export default class ReactGantt extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    dateFormat: PropTypes.string,
    dayFormat: PropTypes.string,
    debug: PropTypes.bool,
    hourFormat: PropTypes.string,
    leftBound: PropTypes.object,
    minuteFormat: PropTypes.string,
    monthFormat: PropTypes.string,
    rightBound: PropTypes.object,
    secondFormat: PropTypes.string,
    style: PropTypes.object,
    templates: PropTypes.object,
    timeFormat: PropTypes.string,
    timelineStyle: PropTypes.object,
    weekFormat: PropTypes.string,
    yearFormat: PropTypes.string,
    simpleTickRendering: PropTypes.bool
  };
  static childContextTypes = {
    dateFormat: PropTypes.string.isRequired,
    dayFormat: PropTypes.string,
    debug: PropTypes.bool.isRequired,
    hourFormat: PropTypes.string,
    leftBound: PropTypes.object.isRequired,
    minuteFormat: PropTypes.string,
    monthFormat: PropTypes.string,
    rightBound: PropTypes.object.isRequired,
    secondFormat: PropTypes.string,
    templates: PropTypes.object.isRequired,
    timeFormat: PropTypes.string,
    timelineWidth: PropTypes.number.isRequired,
    weekFormat: PropTypes.string,
    yearFormat: PropTypes.string
  };
  static defaultProps = {
    dateFormat: 'YY-MM-DD',
    dayFormat: 'YY-MM-DD',
    debug: false,
    hourFormat: 'HH',
    leftBound: moment().toDate(),
    minuteFormat: 'HH:MM',
    monthFormat: 'YY-MM-DD',
    rightBound: moment().toDate(),
    secondFormat: 'HH:MM:SS',
    style: {},
    templates: {},
    timeFormat: 'YY-MM-DD HH:MM',
    timelineStyle: { minWidth: '60px' },
    weekFormat: 'YY-MM-DD',
    yearFormat: 'YY-MM-DD',
    simpleTickRendering: false
  };

  state = {
    timelineWidth: 0
  };

  getChildContext() {
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

  componentDidMount() {
    // eslint-disable-next-line no-undef
    this.resizeEventListener = window.addEventListener('resize', e =>
      this.handleResize(e)
    );
    this.handleResize();
  }

  componentWillUnmount() {
    if (this.resizeEventListener) {
      this.resizeEventListener.removeEventListener();
    }
  }

  handleResize() {
    const parentDiv = this.timeline.parentNode.parentNode.parentNode.parentNode;
    const appliedWidth = Math.min(
      parentDiv.clientWidth - 300,
      this.timeline.offsetWidth
    );
    this.setState({ timelineWidth: appliedWidth });  
  }

  render() {
    const thStyle = { whiteSpace: 'nowrap' };
    return (
      <div style={this.props.style}>
        <table style={{ width: '100%' }} cellSpacing={0}>
          <thead>
            <tr>
              <th
                style={{
                  ...thStyle,
                  width: '0px'
                }}
              />
              <th
                ref={c => { this.timeline = c }}
                style={{
                  ...thStyle,
                  width: '100%'
                }}
              >
                <GanttTimeline
                  style={this.props.timelineStyle}
                  simpleTickRendering={this.props.simpleTickRendering}
                  rows={this.props.children}
                />
              </th>
            </tr>
          </thead>
          <tbody>{this.props.children}</tbody>
        </table>
      </div>
    );
  }
}
