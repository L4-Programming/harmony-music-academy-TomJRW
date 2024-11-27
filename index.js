// Importing validation and helper functions from other modules
import { validateEmail, validateLevel, validateHours } from "./validateForm.js";
import { showError, clearErrorMessages } from "./errorHandling.js";
import { calculateCost } from "./calculateCost.js";

// Select the form and the form section for dynamic updates
const form = document.querySelector("form");
const formSection = document.querySelector(".form-section"); // Target the form section for replacement

// Add an event listener for form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Capture user inputs and trim any extra whitespace
  const userEmail = document.querySelector("#email").value.trim();
  const userLevel = document.querySelector("#level").value.trim();
  const userHours = document.querySelector("#hoursPerWeek").value.trim();

  // Clear previous error messages to prevent duplication
  clearErrorMessages();
  let hasError = false;

  // Validate the email input
  const emailError = validateEmail(userEmail);
  if (emailError) {
    showError("email", emailError); // Display error message for email field
    hasError = true;
  }

  // Validate the level selection
  const levelError = validateLevel(userLevel);
  if (levelError) {
    showError("level", levelError); // Display error message for level field
    hasError = true;
  }

  // Validate the hours input
  const hoursError = validateHours(userHours, userLevel);
  if (hoursError) {
    showError("hoursPerWeek", hoursError); // Display error message for hours field
    hasError = true;
  }

  // If no errors were found, proceed with cost calculation and displaying results
  if (!hasError) {
    try {
      // Calculate the total cost based on the inputs
      const totalCost = calculateCost(parseInt(userHours), userLevel);

      // Replace the form section with the results card
      formSection.innerHTML = `
        <div class="results-card">
          <div class="results-email">${userEmail}</div>
          <div class="results-cost">£${totalCost.toFixed(
            2
          )}<span> per week</span></div>
          <div class="results-details">
            <div>
              <dt>Level</dt>
              <dd class="results-detail">${userLevel}</dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd class="results-detail">${userHours}</dd>
            </div>
          </div>
        </div>
        <button class="submit-btn" id="resetBtn">Start Over</button>
      `;

      // Add functionality to reset the form
      document.getElementById("resetBtn").addEventListener("click", () => {
        location.reload(); // Reload the page to reset the form
      });
    } catch (error) {
      // Log any errors encountered during cost calculation
      console.error("Error calculating cost:", error.message);
    }
  }
});
