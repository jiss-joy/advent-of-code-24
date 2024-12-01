const fs = require("fs");
const path = require("path");

let col1 = [];
let col2 = [];

function separateColumns(rows) {
  for (let row of rows) {
    const splitRow = row.split("   ");
    col1.push(splitRow[0]);
    col2.push(splitRow[1]);
  }
}

function calculateDistance() {
  let totalDistance = 0;
  const sortedCol1 = col1.sort();
  const sortedCol2 = col2.sort();

  for (let i = 0; i < sortedCol1.length; i++) {
    totalDistance += Math.abs(sortedCol1[i] - sortedCol2[i]);
  }
  console.log('Distance: ', totalDistance);
}

function calculateSimilarityScore() {
  let similarityScore = 0;
  
  for(let i = 0; i < col1.length; i++) {
    let score = 0;
    let left = col1[i];
    for(let j = 0; j < col2.length; j++) {
      if(left === col2[j]) score++;
    }
    similarityScore += left * score;
  }
  console.log('Similarity Score: ', similarityScore);
}

// ========

const inputFilePath = path.join(__dirname, "input.txt");

fs.readFile(inputFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input file:", err);
    return;
  }
  const rows = data.trim().split("\n");
  separateColumns(rows);
  calculateDistance(rows);
  calculateSimilarityScore(rows);
});
