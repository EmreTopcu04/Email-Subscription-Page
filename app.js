// Select the email input field
const emailInput = document.querySelector('email');

// Select the element where the message will be displayed
const emailMessage = document.querySelector('emailMessage');

// Regular expression for email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Add an event listener to the email input field
emailInput.addEventListener('input', () => {
    // Get the value of the email input
    const email = emailInput.value;

    // Validate the email format
    if (emailRegex.test(email)) {
        emailMessage.textContent = "Valid email"; // Display a success message
        emailMessage.style.color = 'green'; // Optional: Change text color for valid email
    } else {
        emailMessage.textContent = "Invalid email format"; // Display an error message
        emailMessage.style.color = 'red'; // Optional: Change text color for invalid email
    }
});