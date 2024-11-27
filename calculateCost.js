// This function calculates the total cost based on the number of hours and the selected level
export function calculateCost(hours, level) {
  // Define an object to map each level to its cost per hour
  const costPerHour = {
    Basic: 12.25, // Cost per hour for the "Basic" level
    Advanced: 15.5, // Cost per hour for the "Advanced" level
  };

  // Check if the provided level exists in the costPerHour object
  if (!costPerHour[level]) {
    // If the level is not valid, throw an error to indicate an invalid input
    throw new Error(`Invalid level: ${level}`);
  }

  // Calculate the total cost by multiplying the number of hours by the cost per hour for the selected level
  return hours * costPerHour[level];
}
