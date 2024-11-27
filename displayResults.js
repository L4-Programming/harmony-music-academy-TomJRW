// Function to dynamically display the user's form submission results
export function displayResults(output) {
  // Select the element with the ID "results" where the results will be displayed
  const results = document.getElementById("results");

  // Dynamically update the inner HTML of the "results" element with the results card structure
  results.innerHTML = `
      <div class="results-card">
          <!-- Display the user's email in a styled email section -->
          <div class="results-email">${output.userEmail}</div>
          
          <!-- Display the total cost of the selected hours and level -->
          <div class="results-cost">£${output.totalCost}<span> per week</span></div>
          
          <!-- Display additional details: the user's selected level and hours per week -->
          <div class="results-details">
              <div>
                  <dt>Level</dt>
                  <dd class="results-detail">${output.userLevel}</dd>
              </div>
              <div>
                  <dt>Hours</dt>
                  <dd class="results-detail">${output.userHours}</dd>
              </div>
          </div>
      </div>
  `;

  // Make the "results" section visible by setting its display style to "block"
  results.style.display = "block";
}
