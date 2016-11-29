'use strict';

var React = require('react');

module.exports = {

  propTypes: {
    showTooltip: React.PropTypes.bool,
    tooltipFormat: React.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      showTooltip: true,
      tooltipFormat: function tooltipFormat(d) {
        return String(d.yValue);
      }
    };
  },
  getInitialState: function getInitialState() {
    return {
      tooltip: {
        x: 0,
        y: 0,
        child: '',
        show: false
      },
      changeState: false
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps() {
    this.setState({
      changeState: false
    });
  },
  onMouseOver: function onMouseOver(x, y, dataPoint) {
    if (!this.props.showTooltip) {
      return;
    }
    var w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
    width - x <150 ? x=x-180 : null
    this.setState({
      tooltip: {
        x: x,
        y: y,
        child: this.props.tooltipFormat.call(this, dataPoint),
        show: true
      },
      changeState: true
    });
  },
  onMouseLeave: function onMouseLeave() {
    if (!this.props.showTooltip) {
      return;
    }
    this.setState({
      tooltip: {
        x: 0,
        y: 0,
        child: '',
        show: false
      },
      changeState: true
    });
  }
};