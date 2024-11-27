// Display an error message under the relevant input
export function showError(fieldId, message) {
  // Locate the error message container for the given field ID
  const errorContainer = document
    .querySelector(`#${fieldId}`) // Select the input element by its ID
    .parentNode.querySelector(".error-message"); // Find the ".error-message" container within the input's parent element

  // Check if the error container exists
  if (errorContainer) {
    // Populate the error container with the provided message wrapped in a list
    errorContainer.innerHTML = `<ul><li>${message}</li></ul>`;
    errorContainer.style.display = "block"; // Make the error message visible by setting its display style to "block"
  } else {
    // Log an error if the expected error container is not found
    console.error(`Error container not found for field: ${fieldId}`);
  }
}

// Clear all error messages from the form
export function clearErrorMessages() {
  // Select all elements with the class ".error-message" on the page
  const errorMessages = document.querySelectorAll(".error-message");

  // Iterate over each error message element
  errorMessages.forEach((errorMessage) => {
    // Hide the error message by setting its display style to "none"
    errorMessage.style.display = "none";
    // Clear any existing error message content to reset the container
    errorMessage.innerHTML = "";
  });
}
