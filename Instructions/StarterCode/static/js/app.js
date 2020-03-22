// from data.js
var tableData = data;

// Add table to document
var tbody = d3.select("tbody");

tableData.forEach((ufo_data) => {
    var row = tbody.append("tr");
    
    Object.entries(ufo_data).forEach(([key, value]) => {
    
        var cell = row.append("td");
        cell.text(value);
    });
});