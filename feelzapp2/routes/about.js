//get model schema data
var models = require('../models');

exports.viewAbout = function(req, res){
	models.LoggedIn
	    .find()
	    .exec(checkLogin);

	function checkLogin(err, login) {
		var user = {"username": login[0]["username"]};
		res.render('about', user);
	}
};