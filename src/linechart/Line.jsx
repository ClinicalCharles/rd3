'use strict';

var React = require('react');

module.exports = React.createClass({

  displayName: 'Line',

  propTypes: {
    fill: React.PropTypes.string,
    path: React.PropTypes.string,
    stroke: React.PropTypes.string,
    strokeWidth: React.PropTypes.number,
    strokeDashArray: React.PropTypes.string,
    defaultLineStrokeWidth: React.PropTypes.number,
  },

  getDefaultProps: function getDefaultProps() {
    return {
      stroke: '#3182bd',
      fill: 'none',
      className: 'rd3-linechart-path'
    };
  },
  render: function render() {
    var props = this.props;
    return React.createElement('path', {
      d: props.path,
      stroke: props.stroke,
      strokeWidth: props.strokeWidth || props.defaultLineStrokeWidth || 1,
      strokeDasharray: props.strokeDashArray,
      fill: props.fill,
      className: props.className
    });
  }
});