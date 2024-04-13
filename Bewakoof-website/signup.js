// Select the necessary elements
let passwordInput = document.getElementById('passwordInput');
let eyeIcon = document.getElementById('eye');
let hiddenEye = document.getElementById('hidden-eye')

// Add click event listener to the eye icon
eyeIcon.addEventListener('click', signPassword);

// Function to toggle password visibility
function signPassword() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        // eyeIcon.src = ""; 
        eyeIcon.style.opacity="1";
        hiddenEye.style.opacity="0"



    } else {
        passwordInput.type = 'password';
      
       eyeIcon.style.opacity="0";
       hiddenEye.style.opacity="1"

       
       

    }
}



