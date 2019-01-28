// have a quick look at data
console.log(data);

// generate random array for color mapping
var colorArray = []
while(colorArray.length < 30){
    var r = Math.floor(Math.random()*100/3) + 1;
    if(colorArray.indexOf(r) === -1) colorArray.push(r);
};
console.log(colorArray);

// set up the trace element
var trace1 = {
	x: data.map(row => row.Budget),
	y: data.map(row => row.Critical_Rating),
	text: data.map(row => row.Site),
	type: "scatter",
	mode: "markers",
	marker: {
		color: colorArray,
		colorscale: 'Jet',
		opacity: 0.5,
		cmin: 0,
		cmax: 50,
		line: {
			color: 'rgba(165, 196, 50, 1)',
			width: 1,
		},
      symbol: 'circle',
      size: 20
	}
  }

// set up the data variable
var data = [trace1];

// set up the layout 
var layout = {
	title: "OUSD Cost vs. Priority",
	xaxis: {
		title: {
			text: 'Cost (Budget)',
		},
	},
	yaxis: {
		title: {
			text: 'Priority (via Principals)',
		}
	}
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);