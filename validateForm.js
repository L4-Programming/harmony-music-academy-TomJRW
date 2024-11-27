// Validate email input
export function validateEmail(email) {
  // Check if the email field is empty
  if (email === "") {
    return "Please enter your email address."; // Return error message if empty
  }

  // Define a regular expression for validating email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email does not match the pattern
  if (!emailPattern.test(email)) {
    return "Please enter a valid email address."; // Return error message for invalid format
  }

  return null; // Return null if there are no errors
}

// Validate level input
export function validateLevel(level) {
  // Check if the level field is empty
  if (level === "") {
    return "Please select your level."; // Return error message if empty
  }

  return null; // Return null if there are no errors
}

// Validate hours input
export function validateHours(hours, level) {
  // Define maximum allowable hours for each level
  const maxHoursPerLevel = {
    Basic: 5, // Maximum 5 hours for Basic level
    Advanced: 10, // Maximum 10 hours for Advanced level
  };

  // Convert hours to an integer for validation
  hours = parseInt(hours);

  // Check if hours are not a valid number or less than or equal to zero
  if (isNaN(hours) || hours <= 0) {
    return "Please enter a valid number of hours greater than zero."; // Return error message for invalid input
  }

  // Check if the entered hours exceed the maximum limit for the selected level
  if (hours > maxHoursPerLevel[level]) {
    return `For the ${level} level, please enter up to ${maxHoursPerLevel[level]} hours.`; // Return error message for exceeding the limit
  }

  return null; // Return null if there are no errors
}
