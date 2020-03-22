// from data.js
var tableData = data;

// function to add table data
function createTable(elements) {
    // Add table to document
    var tbody = d3.select("tbody");
    
    // Clear table
    tbody.html("");

    console.log("cleared table!");

    elements.forEach((ufo_data) => {
        var row = tbody.append("tr");
    
        Object.entries(ufo_data).forEach(([key, value]) => {
    
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

// Form listener
var button = d3.select("#filter-btn");

button.on("click", function() {

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);    // check

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    console.log(filteredData);  // check

    createTable(filteredData);

});

// Run function at least once to create default table
createTable(tableData);