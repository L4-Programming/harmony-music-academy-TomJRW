export function calculateCost(hours, level) {
  const costPerHour = {
    Basic: 12.25,
    Advanced: 15.5,
  };
  if (!costPerHour[level]) {
    throw new Error(`Invalid level: ${level}`);
  }
  return hours * costPerHour[level];
}
