import React, {Component} from 'react';
import moment from 'moment';
import _ from 'underscore';

export default class ReactGantt extends Component {
	constructor() {
		super();
		this.state = {
			tableId: _.sample('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 32).join(''),
			scaleMarksCount: 99,
			scaleDrawn: false
		}
	}

	renderBar(row) {
		var difference = moment(this.props.options.leftBound).unix();
		var rightBound = moment(this.props.options.rightBound).unix() - difference;
		var startDate = moment(row.startDate).unix() - difference;
		if (startDate < 0) {
			startDate = 0;
		} else if (startDate > rightBound) {
			startDate = rightBound;
		}
		var climaxDate = moment(row.climaxDate).unix() - difference;
		if (climaxDate < 0) {
			climaxDate = 0;
		} else if (climaxDate > rightBound) {
			climaxDate = rightBound;
		}
		var endDate = moment(row.endDate).unix() - difference;
		if (endDate < 0) {
			endDate = 0;
		} else if (endDate > rightBound) {
			endDate = rightBound;
		}
		var leftPadWidth = (startDate / rightBound * 100) + '%';
		var div1Width = ((climaxDate - startDate) / rightBound * 100) + '%';
		var div2Width = ((endDate - climaxDate) / rightBound * 100) + '%';
		var rightPadWidth = ((rightBound - endDate) / rightBound * 100) + '%';
		var bar1 = {
			marginTop: '2px',
			marginBottom: '2px',
			marginLeft: leftPadWidth,
			marginRight: '0px',
			backgroundColor: 'blue',
			width: div1Width,
			float: 'left',
			height: '30px'
		};
		var bar2 = {
			marginTop: '2px',
			marginBottom: '2px',
			marginLeft: '0px',
			marginRight: rightPadWidth,
			backgroundColor: 'red',
			width: div2Width,
			float: 'left',
			height: '30px'
		};
		return (
			<div>
				<div style={bar1}></div>
				<div style={bar2}></div>
			</div>
		);
	}

	renderRows() {
		var rows = [];
		var titleStyle = {
			border: '1px solid black'
		};
		var timelineStyle = {
			border: '1px solid black',
			width: '100%'
		};
		for(var i = 0; i < this.props.rows.length; i++) {
			var rowObject = this.props.rows[i];
			var row = (
				<tr key={rowObject.title}>
					<td style={titleStyle}>
						{rowObject.title}
					</td>
					<td key={rowObject.title} style={timelineStyle}>
						{this.renderBar(rowObject)}
					</td>
				</tr>
			);
			rows.push(row);
		}
		return rows;
	}

	drawScale() {
		var leftBound = this.props.options.leftBound;
		var rightBound = this.props.options.rightBound;
		var minutes = 0;
		var hours = 0;
		var days = 0;
		var weeks = 0;
		var months = 0;
		var years = moment(rightBound).diff(moment(leftBound), 'years');
		if (years < 2) {
			var months = moment(rightBound).diff(moment(leftBound), 'months');
			if (months < 2) {
	//			var weeks = moment(rightBound).diff(moment(leftBound), 'weeks');
	//			if (weeks < 1) {
					var days = (moment(rightBound).unix() - moment(leftBound).unix()) / 24 / 60 / 60;
					if (days < 2) {
						var hours = moment(rightBound).diff(moment(leftBound), 'hours');
						if (hours < 1) {
							var minutes = moment(rightBound).diff(moment(leftBound), 'minutes');
							this.setState({scale: this.calculateScale(minutes, 'minutes')});
						} else {
							this.setState({scale: this.calculateScale(hours, 'hours')});
						}
					} else {
						this.setState({scale: this.calculateScale(days, 'days')});
					}
	//			} else {
	//				this.setState({scale: this.calculateScale(weeks, 'weeks')});
	//			}
			} else {
				this.setState({scale: this.calculateScale(months, 'months')});
			}
		} else {
			this.setState({scale: this.calculateScale(years, 'years')});
		}
	}

	calculateScale(count, type) {
		var difference = moment(this.props.options.leftBound).unix();
		var widthByTime = moment(this.props.options.rightBound).unix() - difference;
		var table = document.querySelector('#' + this.state.tableId + ' > thead td:nth-child(2)');
		var widthByPixels = table.offsetWidth;
		var markersCount = Math.round(widthByPixels / 100);
		var intervalByTime = 0;
		var intervalByPixels = 0;
		switch (type) {
			case 'years':
				intervalByTime = Math.floor(Math.floor(count) / markersCount);
				intervalByPixels = widthByPixels / count * intervalByTime;
				break;
			case 'months':
				intervalByTime = Math.floor(Math.floor(count) / markersCount);
				intervalByPixels = widthByPixels / count * intervalByTime;
				break;
			case 'days':
				intervalByTime = Math.floor(Math.floor(count) / markersCount);
				intervalByPixels = widthByPixels / count * intervalByTime;
				break;
			default:
		}
		var markers = [];
		var style = {
			margin: '0px',
			padding: '0px',
			width: intervalByPixels + 'px',
			float: 'left'
		};
		for (var i = 0; i < markersCount; i++) {
			if (i + 1 === markersCount) {
				style.width = (intervalByPixels - 1) + 'px';
			}
			var date = moment(difference * 1000);
			switch (type) {
				case 'years':
					date.add(i * intervalByTime, 'years');
					break;
				case 'months':
					date.add(i * intervalByTime, 'years');
					break;
				case 'days':
					date.add(i * intervalByTime, 'years');
					break;
				default:
			}
			var mark = (
				<div key={i} style={style}>
					{date.format('YYYY MM DD')}
				</div>
			);
			markers.push(mark);
		}
		return (
			<div>
				{markers}
			</div>
		);
	}

	componentDidMount() {
		if (this.state.scaleDrawn === false) { // prevents infinite loop
			this.drawScale();
			this.setState({scaleDrawn: true});
		}
	}

	render() {
		this.renderRows();
		var tableStyle = {
			border: '1px solid black',
			width: '100%'
		};
		var scaleStyle = {
			width: '100%'
		}
		return (
			<div>
				<table id={this.state.tableId} style={tableStyle}>
					<thead>
						<tr>
							<td>Title</td>
							<td style={scaleStyle}>{this.state.scale}</td>
						</tr>
					</thead>
					<tbody>
						{this.renderRows()}
					</tbody>
				</table>
			</div>
		);
	}
}