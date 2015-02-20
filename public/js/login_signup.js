//new post submission and validation
function submitSignupForm(form) {

	var json = { "username": form.firstname.value,
				 "email": form.signup_email.value,
				 "password": form.password.value
				};

    $.post('/SignupFormSubmit', json, function test(result) {

    });


    return true;
}
