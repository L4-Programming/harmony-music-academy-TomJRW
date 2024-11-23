import { validateEmail, validateLevel, validateHours } from "./validateForm.js";
import { showError, clearErrorMessages } from "./errorHandling.js";
import { calculateCost } from "./calculateCost.js";

const form = document.querySelector("form");
// Event listener for form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Capture user inputs
  const userEmail = document.querySelector("#email").value.trim();
  const userLevel = document.querySelector("#level").value.trim();
  const userHours = document.querySelector("#hoursPerWeek").value.trim();

  // Clear previous error messages
  clearErrorMessages();
  let hasError = false;

  // Validate email
  const emailError = validateEmail(userEmail);
  if (emailError) {
    showError("email", emailError);
    hasError = true;
  }

  // Validate level
  const levelError = validateLevel(userLevel);
  if (levelError) {
    showError("level", levelError);
    hasError = true;
  }

  // Validate hours
  const hoursError = validateHours(userHours, userLevel);
  if (hoursError) {
    showError("hoursPerWeek", hoursError);
    hasError = true;
  }

  // If no errors, calculate and display the total cost
  if (!hasError) {
    try {
      const totalCost = calculateCost(parseInt(userHours), userLevel);
      // Update the cost output section
      const costOutput = document.getElementById("costOutput");
      const costMessage = document.getElementById("costMessage");
      costMessage.innerHTML = `Total cost for ${userHours} hours at ${userLevel} level: <strong>£${totalCost}</strong>`;
      costOutput.style.display = "block"; // Make the cost output visible
    } catch (error) {
      console.error(error.message);
    }
  }
});
