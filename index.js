let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Capture user inputs
    let userEmail = document.querySelector("#email").value;
    let userLevel = document.querySelector("#level").value;
    let userHours = document.querySelector("#hoursPerWeek").value;

    // Clear previous error messages
    clearErrorMessages();
    let hasError = false;

    // Presence check and validation for email
    if (userEmail.trim() === "") {
        showError("email", "Please enter your email address.");
        hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
        showError("email", "Please enter a valid email address.");
        hasError = true;
    }

    // Presence check for level
    if (userLevel.trim() === "") {
        showError("level", "Please select your level.");
        hasError = true;
    }

    // Presence check and validation for hours
    userHours = parseInt(userHours);
    if (isNaN(userHours) || userHours <= 0) {
        showError("hoursPerWeek", "Please enter a valid number of hours greater than zero.");
        hasError = true;
    } else {

        // Maximum hours based on level
        const maxHoursPerLevel = {
            "Basic": 5,
            "Advanced": 10
        };

        if (userHours > maxHoursPerLevel[userLevel]) {
            showError("hoursPerWeek", `For the ${userLevel} level, please enter up to ${maxHoursPerLevel[userLevel]} hours.`);
            hasError = true;
        }
    }

    // Only proceed with form submission if there are no errors
    if (!hasError) {
        const costPerHour = userLevel === "Basic" ? 10 : userLevel === "Intermediate" ? 15 : 20;
        const totalCost = userHours * costPerHour;
        alert(`Total cost for ${userHours} hours at ${userLevel} level: £${totalCost}`);
        console.log({ userEmail, userLevel, userHours, totalCost });
    }
});

// Function to display an error message under the relevant input
function showError(fieldId, message) {
    const errorContainer = document.querySelector(`#${fieldId} + .error-message`);
    errorContainer.innerHTML = `<ul><li>${message}</li></ul>`;
    errorContainer.style.display = "block";
}

// Function to clear all error messages
function clearErrorMessages() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(errorMessage => {
        errorMessage.style.display = "none";
        errorMessage.innerHTML = ""; // Clear previous error message
    });
} 