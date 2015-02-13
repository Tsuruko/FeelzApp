// Get all of our previous user data
var userData = require('../userData.json');
var postData = require('../postData.json');

exports.viewSignup = function(req, res){
	res.render('signup');
};


exports.submitSignup = function(req, res){

	//var entered_email = req.query.signup_email;

	/*
	var entered_username = login-username;
	var entered_password = login-password;
	
	var count = 0;

	while( count < data["users"].length - 1 ) {
		if( entered_username == data["users"][count]["username"])
			break;

		count++;
	}

	if( count == data["users"].length) {
		console.log("error, wrong username/password")
		return;
	}

	if( entered_password != data["users"][count]["password"] ) {
		console.log("error, wrong username/password");
		return;
	}
	*/
	
	res.render('index', postData);
};