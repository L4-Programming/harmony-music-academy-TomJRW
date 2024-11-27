export function displayResults(output) {
  const results = document.getElementById("results");
  results.innerHTML = `
      <div class="results-card">
          <div class="results-email">${output.userEmail}</div>
          <div class="results-cost">£${output.totalCost}<span> per week</span></div>
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
  results.style.display = "block"; // Make the results section visible
}
