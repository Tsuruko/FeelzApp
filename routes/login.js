// Get all of our user data
var data = require('../userData.json');

exports.viewLogin = function(req, res){
	var entered_username = req.query.login-username;
	var entered_password = req.query.login-password;
	
	var count = 0;

	while( count < data["users"].length ) {
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
	
	res.render('login', LoggedIn);
};