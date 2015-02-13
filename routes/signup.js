// Get all of our previous user data
var data = require('../userData.json');

exports.viewSignup = function(req, res){
	res.render('signup');
};