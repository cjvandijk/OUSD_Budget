// YOUR CODE HERE
console.log(data);

var trace1 = {
	y: data.Critical_Rating,
	x: data.Budget,
	type: "scatter",
	mode: "markers"
	}
};


// set up the data variable
var data = [trace1];

// set up the layout variable
var layout = {
  title: "OUSD Cost vs. Priority",
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);