import { validateEmail, validateLevel, validateHours } from "./validateForm.js";
import { showError, clearErrorMessages } from "./errorHandling.js";
import { calculateCost } from "./calculateCost.js";

const form = document.querySelector("form");
const formSection = document.querySelector(".form-section"); // Target the form section for replacement

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

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

  // If no errors, calculate and display the results
  if (!hasError) {
    try {
      const totalCost = calculateCost(parseInt(userHours), userLevel);

      // Replace form section with results
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

      // Add a reset button functionality
      document.getElementById("resetBtn").addEventListener("click", () => {
        location.reload(); // Reload the page to reset the form
      });
    } catch (error) {
      console.error("Error calculating cost:", error.message);
    }
  }
});
