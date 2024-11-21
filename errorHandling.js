// Display an error message under the relevant input
export function showError(fieldId, message) {
    // Locate the error message container
    const errorContainer = document.querySelector(`#${fieldId}`).parentNode.querySelector(".error-message");
    // Check if the container exists
    if (errorContainer) {
        errorContainer.innerHTML = `<ul><li>${message}</li></ul>`;
        errorContainer.style.display = "block"; // Make the error message visible
    } else {
        console.error(`Error container not found for field: ${fieldId}`);
    }
}

// Clear all error messages
export function clearErrorMessages() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((errorMessage) => {
        errorMessage.style.display = "none"; // Hide the error message
        errorMessage.innerHTML = ""; // Clear the error message content
    });
} 