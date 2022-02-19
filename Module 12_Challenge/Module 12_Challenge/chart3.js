// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 
    console.log(data);
    var samplesArray = data.samples;
    console.log(samplesArray);

    // Create a variable that filters the samples for the object with the desired sample number.
    var selectedIdSamples = samplesArray.filter(data => data.id == sample);
    console.log(selectedIdSamples);

    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var metadata_sId = data.metadata.filter(data => data.id == sample);

    // Create a variable that holds the first sample in the array.
    var firstSample = selectedIdSamples[0];
    console.log(firstSample); 

    // 2. Create a variable that holds the first sample in the metadata array.
    metadata_sId = firstSample
    console.log(metadata_sId);

    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otuIds = firstSample.otu_ids;
    var otuLabels = firstSample.otu_labels;
    var sampleValues = firstSample.sample_values;
    console.log(otuIds);
    console.log(otuLabels);

    // 3. Create a variable that holds the washing frequency.
    var washFreq = metadata_sId[0].wfreq;

    // Create the yticks for the bar chart.
    var yticks = otuIds.slice(0,10).map(id => "OTU " + id).reverse();
      console.log(yticks);

    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot();
    
    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot();
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [
    {

        domain: { x: [0, 1], y: [0, 1] },
        value: washFreq,
        title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week"},
        type: "indicator",
        mode: "gauge+number",
        gauge: {
           axis: { range: [null, 10] },
           bar: {color: "black"},
           steps: [
            { range: [0, 2], color: "lightgray" },
            { range: [2, 4], color: "gray" },
            { range: [4, 6], color: "white"},
            { range: [6, 8], color: "pink"},
            { range: [8, 10], color: "red"}, ]
        }
    }
];
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = {
    width: 600, height: 450, margin: { t: 0, b: 0 } };
    

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout, {responsive: true});
    });
}