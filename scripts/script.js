// Define a variable to count the number of Seren stones mined
let serenStoneCount = 0;

// Define an array to store the mined Seren stones
let minedStones = [];

// Define the function to click and mine
function clickAndMine() {
  // Use a pickaxe to mine the rock
  mine();
  
  // Check if the mined rock is a Seren stone
  if (isSerenStone()) {
    // Add the Seren stone to the array of mined stones
    minedStones.push(getMinedStone());
    
    // Increment the number of Seren stones mined
    serenStoneCount++;
  }
}

// Start the mining loop
while (serenStoneCount < 100) {
  // Call the `clickAndMine` function to perform the click and mine action
  clickAndMine();
}

// Display the result
console.log("Total Seren stones mined: " + serenStoneCount);
console.log("List of Seren stones mined: " + minedStones);
