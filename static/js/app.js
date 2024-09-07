const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Async function to fetch data
async function fetchData() {
    const response = await d3.json(url);
    return response;
}

// Function to initialize dashboard at startup
async function init() {
    const data = await fetchData();
    
    // Select dropdown menu with D3
    let dropdownMenu = d3.select("#selDataset");
    
    // Populate dropdown menu with IDs
    let sampleNames = data.names;
    sampleNames.forEach((name) => {
        dropdownMenu.append("option").text(name).property("value", name);
    });

    // Use the first sample from the list to initialize plots
    let firstSample = sampleNames[0];
    buildCharts(firstSample, data);
    buildMetadata(firstSample, data);
}

// Function to build metadata panel
function buildMetadata(sampleID, data) {
    let metadata = data.metadata;
    
    // Filter the metadata for the sample ID
    let sample = metadata.find(sample => sample.id == sampleID);
    
    // Select panel and clear it
    let panel = d3.select("#sample-metadata");
    panel.html("");

    // Add each key-value pair to the panel
    Object.entries(sample).forEach(([key, value]) => {
        panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
}

// Function to build charts (bar and bubble) based on sample
function buildCharts(sampleID, data) {
    let samples = data.samples;
    
    // Filter the samples for the sample ID
    let sample = samples.find(sample => sample.id == sampleID);
    
    // Variables for sample data
    let otu_ids = sample.otu_ids;
    let sample_values = sample.sample_values;
    let otu_labels = sample.otu_labels;

    // Build Bar Chart
    let barData = [{
        x: sample_values.slice(0, 10).reverse(),
        y: otu_ids.slice(0, 10).map(otu_id => `OTU ${otu_id}`).reverse(),
        text: otu_labels.slice(0, 10).reverse(),
        type: "bar",
        orientation: "h"
    }];
    
    let barLayout = {
        title: "Top 10 Bacteria Cultures Found"
    };
    
    Plotly.newPlot("bar", barData, barLayout);
    
    // Build Bubble Chart
    let bubbleData = [{
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode: "markers",
        marker: {
            size: sample_values,
            color: otu_ids,
            colorscale: "Earth"
        }
    }];
    
    let bubbleLayout = {
        xaxis: { title: "OTU ID" },
        hovermode: "closest"
    };
    
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);
}

// Function to handle changes in dropdown selection
function optionChanged(newSampleID) {
    fetchData().then((data) => {
        buildCharts(newSampleID, data);
        buildMetadata(newSampleID, data);
    });
}

// Initialize dashboard
init();
