// Capture user's input on form submission
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Store the user's email address as userEmail (string/text)
  let userEmail = document.querySelector("#email").value;
  // Store the user's level as userLevel (string/text)
  let userLevel = document.querySelector("#level").value;
  // Store the user's hours of study as userHours (number)
  let userHours = document.querySelector("#hoursPerWeek").value;

  // Validate the user's input
  // Check if the user has provided an email address
  if (userEmail === "") {
    alert("Please enter your email address.");

    return;
  }

  // Check if the user has selected a level
  // Check if the number of hours requested is within the allowed range
  if (userLevel === "") {
    alert("Please enter your Level.");

    return;
  }


  console.log({ userEmail, userLevel, userHours });

});

  // Check if the user has selected a level
  // Check if the number of hours requested is within the allowed range






// Validate the user's input
// Check if the user has selected a level
// Check if the user has provided an email address
// Check if the user has specified at least one hour of study
// Check if the number of hours requested is within the allowed range
// Calculate the total cost
// Display the total cost to the user
// Store the user's email address as userEmail (string/text)
// Store the user's level as userLevel (string/text)
// Store the user's hours of study as userHours (number)
// Validate the user's input
// Check if the user has selected a level
// Check if the user has provided an email address
// Check if the user has specified at least one hour of study
// Check if the number of hours requested is within the allowed range
// Calculate the total cost
// Display the total cost to the user

// Get the user's email address - userEmail (string)
// Get the user's level - userLevel (string)
// Get the user's hours of study - userHours (number)
// Validate the user's input
// Check if the user has selected a level
// Check if the user has provided an email address - has it entrd, @check
// Check if the user has specified at least one hour of study 0 cnnt b negative
// Check if the number of hours requested is within the allowed range - must be = to or > than 1, less than or = to max numb for the level
// Calculate the total cost
// Calculate the total cost
// Display the total cost to the user
