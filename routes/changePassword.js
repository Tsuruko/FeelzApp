// Get all of our user data
var data = require('../userData.json');

exports.changePass = function(req, res) {
	var old = req.query.oldPassword;
	var newP = req.query.newPassword;
	var confirm = req.query.confirmNewPassword;

	//find logged in as here
	var loggedIn = data["users"][0];

	if (old != loggedIn["password"]) {
		console.log("error, password doesn't match old password");
	}

	if (confirm != newP) {
		console.log("error, passwords don't password");
	}

	loggedIn["password"] = newP;

	res.render('accSettings', loggedIn);
}