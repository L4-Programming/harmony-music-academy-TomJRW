// Select the form element
let form = document.querySelector("form");

// Add event listener for form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Capture user inputs
    const userEmail = document.querySelector("#email").value.trim();
    const userLevel = document.querySelector("#level").value.trim();
    let userHours = document.querySelector("#hoursPerWeek").value.trim();

    // Clear previous error messages
    clearErrorMessages();
    let hasError = false;

    // Validate each input field
    if (!validateEmail(userEmail)) hasError = true;
    if (!validateLevel(userLevel)) hasError = true;
    if (!validateHours(userHours, userLevel)) hasError = true;

    // Only proceed with form submission if there are no errors
    if (!hasError) {
        userHours = parseInt(userHours); // Convert to number for calculation
        const costPerHour = userLevel === "Basic" ? 10 : userLevel === "Advanced" ? 20 : 0;
        const totalCost = userHours * costPerHour;
        alert(`Total cost for ${userHours} hours at ${userLevel} level: £${totalCost}`);
        console.log({ userEmail, userLevel, userHours, totalCost });
    }
});

// Function to validate email
function validateEmail(email) {
    if (email === "") {
        showError("email", "Please enter your email address.");
        return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError("email", "Please enter a valid email address.");
        return false;
    }
    return true;
}

// Function to validate level selection
function validateLevel(level) {
    if (level === "") {
        showError("level", "Please select your level.");
        return false;
    }
    return true;
}

// Function to validate hours input based on level
function validateHours(hours, level) {
    hours = parseInt(hours); // Convert to integer
    if (isNaN(hours) || hours <= 0) {
        showError("hoursPerWeek", "Please enter a valid number of hours greater than zero.");
        return false;
    }
    // Define maximum hours allowed per level
    const maxHoursPerLevel = {
        "Basic": 5,
        "Advanced": 10
    };
    if (hours > maxHoursPerLevel[level]) {
        showError("hoursPerWeek", `For the ${level} level, please enter up to ${maxHoursPerLevel[level]} hours.`);
        return false;
    }
    return true;
}

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