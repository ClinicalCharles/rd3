'use strict';

var React = require('react');

module.exports = React.createClass({

  	displayName: 'Banding',

  	render: function render() {
		var chartHeight=this.props.height;
	    var chartWidth=this.props.width+5;
	    var numberOfBands = this.props.bands.length;
	
	    return React.createElement(
	      'g',
	      null,
	      this.props.bands.map(function (band, idx) {
	        return React.createElement(
	          'g',
	          { key: idx, className: 'band'},
	          	React.createElement(
		          'rect',{
		            x: 0,
		            y: chartHeight*idx/numberOfBands,
		            width: chartWidth,
		            height: chartHeight/numberOfBands,
		            fill: band.colour || band.color,
		            fillOpacity: band.opacity || 1
		          }
		        ),
		        React.createElement(
		          'text',{
		            x: chartWidth*band.textXPosition,
		            y: chartHeight*band.textYPosition/numberOfBands+chartHeight*idx/numberOfBands,
		            textAnchor: band.textAnchor
		          }, band.textValue
		        )
	        );
	      })
	    );

	}
})