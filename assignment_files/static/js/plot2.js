console.log(cityGrowths);

var sortedCities = cityGrowths.sort((a, b) => a.population - b.population).reverse();
console.log(sortedCities);

var topSevenCities = sortedCities.slice(0,7);

console.log(topSevenCities);

var topSevenCityNames = topSevenCities.map(city => city.City);
var topSevenCityPops = topSevenCities.map(city => parseInt(city.population));

console.log(topSevenCityPops);

var trace = {
    x: topSevenCityNames,
    y: topSevenCityPops,
    type: "bar"
};

var data = [trace];

var layout = {
    title: "Top 10 Cities by Population",
    xaxis: {title: "City"},
    yaxis: {title: "Population"}
};

Plotly.newPlot("bar-plot", data, layout);