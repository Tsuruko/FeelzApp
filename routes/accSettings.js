// Get all of our user data
var data = require('../userData.json');

exports.viewAccSettings = function(req, res) {

	//find logged in as here

	var loggedIn = data["users"][0];
	res.render('accSettings', loggedIn);
};


exports.changePass = function(req, res) {
	var old = req.query.oldPassword;
	var newP = req.query.pwd1;
	var confirm = req.query.pwd2;

	//find logged in as here
	var loggedIn = data["users"][0];

	if (old != loggedIn["password"]) {
		console.log("error, password doesn't match old password");
		return;
	}

	if (confirm != newP) {
		console.log("error, passwords don't match");
		return;
	}

	loggedIn["password"] = newP;

	console.log("made it");

	res.render('accSettings', loggedIn);
}