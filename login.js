// login.js

// Function to validate the login form
function validateLoginForm(event) {
    const email = document.querySelector('.div-log input[type="text"]').value;
    const password = document.querySelector('.div-log input[type="password"]').value;
  
    if (!email || !password) {
      alert("Please fill in all fields.");
      event.preventDefault(); // Prevent form submission if validation fails
      return false;
    }
    // Add more validation rules as needed
    return true;
  }
  
  // Function to validate the registration form
  function validateRegistrationForm(event) {
    const email = document.querySelector('.div-reg input[type="text"]').value;
  
    if (!email) {
      alert("Please enter your email address.");
      event.preventDefault(); // Prevent form submission if validation fails
      return false;
    }
    // Add more validation rules as needed
    return true;
  }
  
  // Event listeners for form submissions
  document.addEventListener('DOMContentLoaded', () => {
    // Attach event listeners to the forms
    const loginForm = document.querySelector('.div-log form');
    const registrationForm = document.querySelector('.div-reg form');
  
    if (loginForm) {
      loginForm.addEventListener('submit', validateLoginForm);
    }
  
    if (registrationForm) {
      registrationForm.addEventListener('submit', validateRegistrationForm);
    }
  });
  