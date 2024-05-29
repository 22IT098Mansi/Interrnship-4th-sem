const form = document.querySelector('form');
const loginButton = document.getElementById('login');
const signupButton = document.getElementById('signup');
const slider = document.querySelector('.slider');
const inputs = document.querySelectorAll('input');
//////-------------------------Slider-----------------------//////
signupButton.addEventListener('click', function () {
	slider.style.transform = 'translateX(0%)';
});

loginButton.addEventListener('click', function () {
	slider.style.transform = 'translateX(100%)';
});
//////-----------------------validation..................../////
function checkUsername() {
	const input = document.getElementById('username');
	const error = input.nextElementSibling;
	const min = 3,
		max = 25;

	if (!isRequired(input.value)) {
		showError(input, 'Username cannot be blank.');
	} else if (!isBetween(input.value.length, min, max)) {
		showError(input, `Username must be between ${min} and ${max} characters.`);
	} else {
		showSuccess(input);
	}
}

function checkEmail() {
	const input = document.getElementById('email');
	const error = input.nextElementSibling;

	if (!isRequired(input.value)) {
		showError(input, 'Email cannot be blank.');
	} else if (!isEmailValid(input.value)) {
		showError(input, 'Email is not valid.');
	} else {
		showSuccess(input);
	}
}

function checkPassword() {
	const input = document.getElementById('password');
	const error = input.nextElementSibling;

	if (!isRequired(input.value)) {
		showError(input, 'Password cannot be blank.');
	} else if (!isPasswordSecure(input.value)) {
		showError(input, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
	} else {
		showSuccess(input);
	}
}

function checkConfirmPassword() {
	const input = document.getElementById('confirm-password');
	const error = input.nextElementSibling;
	const password = document.getElementById('password');

	if (!isRequired(input.value)) {
		showError(input, 'Please enter the password again.');
	} else if (password.value !== input.value) {
		showError(input, 'The password does not match.');
	} else {
		showSuccess(input);
	}
}

function isEmailValid(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

function isPasswordSecure(password) {
	const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
	return re.test(password);
}

function isRequired(value) {
	return value === '' ? false : true;
}

function isBetween(length, min, max) {
	return length < min || length > max ? false : true;
}

function showError(input, message) {
	input.classList.add('error');
	input.classList.remove('success');
	error.textContent = message;
}

function showSuccess(input) {
	input.classList.add('success');
	input.classList.remove('error');
	error.textContent = '';
}

const debounce = (fn, delay = 500) => {
	let timeoutId;
	return (...args) => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(() => {
			fn.apply(null, args);
		}, delay);
	};
};

form.addEventListener('submit', function (e) {
	e.preventDefault();
	let isUsernameValid = checkUsername(),
		isEmailValid = checkEmail(),
		isPasswordValid = checkPassword(),
		isConfirmPasswordValid = checkConfirmPassword();
	let isFormValid = isUsernameValid &&
		isEmailValid &&
		isPasswordValid &&
		isConfirmPasswordValid;
	if(isFormValid) {
		alert('Form submitted successfully.');
	}
});

const debouncedCheckUsername = debounce(checkUsername);
const debouncedCheckEmail = debounce(checkEmail);
const debouncedCheckPassword = debounce(checkPassword);
const debouncedCheckConfirmPassword = debounce(checkConfirmPassword);

inputs.forEach(input => {
	input.addEventListener('input', function () {
		switch (input.id) {
			case 'username':
				debouncedCheckUsername(input);
				break;
			case 'email':
				debouncedCheckEmail(input);
				break;
			case 'password':
				debouncedCheckPassword(input);
				break;
			case 'confirm-password':
				debouncedCheckConfirmPassword(input);
				break;
		}
	});
});