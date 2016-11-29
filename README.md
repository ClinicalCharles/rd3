This is my custom fork of the React-D3  library:
=======
[rd3](https://github.com/yang-wei/rd3)
--------------------------------------
These additions arose as a requirement while developing medical data presentations.

Tested on a line graph only. Please test your use case thoroughly.

The additions, in approximate order of complexity:

 - Background 'Banding' to display horizontal coloured segments on a Legend Chart
 - Rendering tooltips outside of the react root node to avoid being obscured by other content (where z-index is ineffective)
 - Replace harcoded table formatting on legend chart and inject custom classnames instead
 - Allow injection of default line stroke width in line graph rather than on a function-by-function basis
 -  Allow injection of  axis tick stroke width to prevent them disappearing when rendering is bad


 
 Below is an example of the props you need to access this functionality.
 


		    <LineChart
 			    		bands= {[
								  { colour:'#77afe3', 
									opacity: '0.35', 
									textXPosition: '0.95', 
									textYPosition: '0.5', 
									textAnchor: 'end', 
									textValue: 'Text'}
   						  		]}
  			    		chartContainerClassName='container'
   						chartClassName='row flex-items-xs-center'
   						legendClassName='row flex-items-xs-center'
   						tickStrokeWidth={1.5}
   						defaultLineStrokeWidth={3} >


 
**Tooltip Rendering**

 - This Requires the addition of an html node in the body, besides the default react root, with an id of tooltip. e.g.

		<body>
		  <div id="app"></div>
		  <div id="tooltip"></div>
		  <script src="bundle.js"></script>
		</body> 

**Bands**

 - Accepts an array of objects which describe each of the bands you wish to have. The bands will share the height equally amongst them.
	 - colour(or color) defines the background colour of the band
	 - opacity defines the opacity  of this colour
	 - textXPosition is the percentage width that the text aligns to in the band(represented as a decimal value)
	 - textYPostion is the percentage height that the text aligns to in the band(represented as a decimal value)
	 - textAnchor is the way that the text renders relative to the textPosition see more [here](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-anchor)
	 - textValue is the text to be displayed

**Legend Chart Classnames**

 - The classnames to be provided to the Legend Chart component which is used for at least the Line Chart when it is generated with a Legend
  - chartContainerClassName 
- chartClassName
- legendClassName 

**tickStrokeWidth**

 - The stroke width of the axis ticks for both X and Y axis

**defaultLineStrokeWidth**

 - The default line width for a Line Chart. If no value is given it defaults to 1. If values are given on a function-by-function basis they will override this.

### License
MIT

Copyright (c) 2014-2016 Eric. S Bullington, Lim Yang Wei, and project [contributors](https://github.com/yang-wei/rd3/graphs/contributors)

