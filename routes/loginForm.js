// Get all of our user data
var data = require('../userData.json');

var postData = require('../postData.json');

exports.submitLogin = function(req, res){

	var entered_username = req.query.username;
	var entered_password = req.query.password;
	
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
	
	res.render('index', postData);
};