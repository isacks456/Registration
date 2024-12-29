const error = document.getElementById('msg');
const login = document.getElementById('login');
const password = document.getElementById('password');
const submit = document.getElementById('btn');
const passShow = document.getElementById('PassShow');

submit.addEventListener('click', (e) => {

	const loginValue = login.value;
	const passwordValue = password.value;

	if(loginValue.length < 8 || passwordValue.length < 8) {
		error.innerHTML = '<h1>Fill in all fields</h1>';
		e.preventDefault();
	} else {
		error.innerHTML = '';
	};

	login.addEventListener('input', () => {
		if(loginValue.length > 0) {
			error.innerHTML = '';
		};
	});

	password.addEventListener('input', () => {
		if(passwordValue.length > 0) {
			error.innerHTML = '';
		};
	});

});

passShow.addEventListener('click', (event) => {
	event.preventDefault();
	if(password.type === 'password') {
		password.type = 'text';
		passShow.textContent = 'Hide password';
	} else {
		password.type ='password';
		passShow.textContent = 'Show the password';
	};
});
