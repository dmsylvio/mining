// Initialize the mining script
var startTime = new Date().getTime();
var oreCounter = 0;

// Start the mining loop
while (true) {
  // Check if the inventory is full
  if (alt1.invFull()) {
    // If the inventory is full, drop all ores
    for (var i = 0; i < 28; i++) {
      alt1.dropInvSlot(i);
    }
  } else {
    // If the inventory is not full, mine the next corrupted rock
    alt1.clickObject(3294, 3474, "Mine corrupted rock");
    oreCounter++;
  }

  // Check if the script has been running for 10 minutes
  if (new Date().getTime() - startTime > 600000) {
    // If the script has been running for 10 minutes, stop the loop
    break;
  }
}

// Display the number of ores mined
alt1.displayMessage("Mined " + oreCounter + " corrupted ores in 10 minutes.", "#00FF00");