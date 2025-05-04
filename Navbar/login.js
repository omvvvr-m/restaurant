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

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const signInSpan = document.getElementById('signInSpan');
const signOutSpan = document.getElementById('signOutSpan');

var currentUserFname;


signInBtn.addEventListener('click', function () {

  loginModal.style.display = 'flex';

});

function signOut() {
  // loginModal.style.display = 'flex';
  sessionStorage.removeItem('isLoggedIn');
  sessionStorage.removeItem('currentUser');

  location.reload();
}
signOutBtn.addEventListener('click', function () {

  signOut();

});



if (!emailInput) {
  console.error('emailInput not found!');
}
const firstName = sessionStorage.getItem('currentUserFname');

signOutBtn.addEventListener('mouseenter', () => {

  signOutSpan.innerHTML = 'Sign Out';

  console.log('ENtered');


});
signOutBtn.addEventListener('mouseleave', () => {
  console.log('exit');

  signOutSpan.innerHTML = firstName ?? 'Sign Out';

});


if (sessionStorage.getItem('isLoggedIn') == "true") {
  console.log("Hiding");
  loginModal.style.display = 'none';


  signOutBtn.style.display = 'flex';
  signOutSpan.innerHTML = firstName ?? 'Sign Out';
  signInBtn.style.display = 'none';

} else {

  console.log("Showing");
  loginModal.style.display = 'none';

  signOutBtn.style.display = 'none';
  signInBtn.style.display = 'flex';

}
function showWelcomeMessage(userData) {
  // const welcomeMessage = document.createElement('div');
  // welcomeMessage.classList.add('welcome-message');
  // welcomeMessage.innerHTML = <h2>Welcome back, ${userData.firstName}!</h2>;
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
  sessionStorage.setItem('currentUserFname', storedData.firstName);
  location.reload();
}


const isLoggedIn = sessionStorage.getItem('isLoggedIn');
const currentUserEmail = sessionStorage.getItem('currentUser');

if (isLoggedIn) {
  // showWelcomeMessage(currentUserData);

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
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  loginUser(email, password);
});