// Select elements
const signUpBtn = document.getElementById('signUp');
const signInBtn = document.getElementById('signIn');
const signUpFormBtn = document.getElementById('signUpBtn');
const signInFormBtn = document.getElementById('signInBtn');
const container = document.getElementById('container');

// Toggle forms on overlay click
signUpBtn.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInBtn.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

// Sign-up functionality
signUpFormBtn.addEventListener('click', () => {
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (name && email && password) {
        // Store user details in localStorage
        localStorage.setItem('user', JSON.stringify({ name, email, password }));
        alert('Account created successfully!');
        document.getElementById('signUpForm').reset();
    } else {
        alert('Please fill in all fields');
    }
});

// Sign-in functionality
signInFormBtn.addEventListener('click', () => {
    const email = document.getElementById('signinEmail').value;
    const password = document.getElementById('signinPassword').value;
    const user = JSON.parse(localStorage.getItem('user'));

    // Check if user details match
    if (user && user.email === email && user.password === password) {
        document.getElementById('signInForm').reset();
        
        // Hide the main container
        container.style.display = 'none';

        // Create a message element with an animation
        const successMessage = document.createElement('h1');
        successMessage.textContent = 'Login successfully!';
        successMessage.classList.add('success-message');

        // Append the message to the body
        document.body.appendChild(successMessage);

        // Redirect to index.html after 2 seconds
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    } else {
        alert('Incorrect email or password');
    }
});
