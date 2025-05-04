const loginForm = document.querySelector('.login-handler form');
const registerForm = document.querySelector('.register-handler form');
const emailInput = document.getElementById('Email');
const passwordInput = document.getElementById('Password');
const firstNameInput = document.getElementById('FirstName');
const lastNameInput = document.getElementById('LastName');
const emailRegInput = document.getElementById('EmailReg');
const passwordRegInput = document.getElementById('PasswordReg');
const confirmPasswordInput = document.getElementById('confirmPassword');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');

if (!emailInput) {
  console.error('emailInput not found!');
}

// Original code with sessionStorage check
if (sessionStorage.getItem('isLoggedIn') == "true") {
  console.log("Hiding");
  loginModal.style.display = 'none';
} else {
  console.log("Showing");
  loginModal.style.display = 'flex';
}
function showWelcomeMessage(userData) {
  // const welcomeMessage = document.createElement('div');
  // welcomeMessage.classList.add('welcome-message');
  // welcomeMessage.innerHTML = `<h2>Welcome back, ${userData.firstName}!</h2>`;
  // document.body.appendChild(welcomeMessage);
}

// register new user

function registerUser(firstName, lastName, email, password) {
  if (localStorage.getItem(email)) {
    alert('Email already exists!');
    return;
  }

  const userData = {
    firstName,
    lastName,
    email,
    password
  };

  localStorage.setItem(email, JSON.stringify(userData));
  alert('Registration successful! You can now login.');
  registerModal.style.display = 'none';
  loginModal.style.display = 'flex';
}

//login existing user

function loginUser(email, password) {
  if (!localStorage.getItem(email)) {
    alert('Email does not exist!');
    return;
  }

  const storedData = JSON.parse(localStorage.getItem(email));

  if (storedData.password !== password) {
    alert('Incorrect password!');
    return;
  }

  sessionStorage.setItem('isLoggedIn', 'true');
  sessionStorage.setItem('currentUser', email);
  registerModal.style.display = 'none';
  loginModal.style.display = 'none';

  // showWelcomeMessage(storedData);
}

// Check if the user is already logged in

const isLoggedIn = sessionStorage.getItem('isLoggedIn');
const currentUserEmail = sessionStorage.getItem('currentUser');

if (isLoggedIn) {
  const currentUserData = JSON.parse(sessionStorage.getItem(currentUserEmail));
  showWelcomeMessage(currentUserData);

}

// Register

registerForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const email = emailRegInput.value.trim();
  const password = passwordRegInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }
  registerUser(firstName, lastName, email, password);
});

// LOGIN

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log("Clickled!");
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  loginUser(email, password);

});
