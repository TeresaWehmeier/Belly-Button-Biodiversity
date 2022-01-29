
//d3.json("samples.json").then(data => console.log(data));

// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b-a);
//     filteredWFreq = wfreq.filter(element => element != null);
//     console.log(filteredWFreq);
// });

d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
    {console.log(key + ': ' + value);});
});