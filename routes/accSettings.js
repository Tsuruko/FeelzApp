// Get all of our user data
var data = require('../userData.json');

exports.viewAccSettings = function(req, res) {

	//find logged in as here

	var loggedIn = data["users"][0];
	res.render('accSettings', loggedIn);
};