const fs = require("fs");
const path = require("path");

let col1 = [];
let col2 = [];
let totalDistance = 0;

function calculateDistance(rows) {
  for (let row of rows) {
    const splitRow = row.split("   ");
    col1.push(splitRow[0]);
    col2.push(splitRow[1]);
  }
  const sortedCol1 = col1.sort();
  const sortedCol2 = col2.sort();

  for (let i = 0; i < sortedCol1.length; i++) {
    totalDistance += Math.abs(sortedCol1[i] - sortedCol2[i]);
  }
  console.log(totalDistance);
}

// ========

const inputFilePath = path.join(__dirname, "input.txt");

fs.readFile(inputFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input file:", err);
    return;
  }
  const rows = data.trim().split("\n");
  calculateDistance(rows);
});
