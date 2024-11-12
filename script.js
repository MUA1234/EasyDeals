// Get the text element
const textElement = document.getElementById('easyDealsText');

// Variable to track timeout
let bounceTimeout;

// Function to start bouncing animation
function startBounce() {
  // Clear any existing timeout to prevent multiple triggers
  clearTimeout(bounceTimeout);

  // Add the bounce animation class
  textElement.classList.add('bounce-animation');

  // Set timeout to stop bounce after 5 seconds
  bounceTimeout = setTimeout(() => {
    textElement.classList.remove('bounce-animation');
    textElement.classList.add('smooth-return');

    // Remove the smooth-return class after animation ends
    setTimeout(() => {
      textElement.classList.remove('smooth-return');
    }, 1000); // Duration of the smooth-return animation
  }, 5000);
}

// Add event listener to the text element for click event
textElement.addEventListener('click', startBounce);
