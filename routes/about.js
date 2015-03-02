//get model schema data
var models = require('../models');

exports.viewAbout = function(req, res){
	models.LoggedIn
	    .find()
	    .exec(checkLogin);

	function checkLogin(err, login) {
		var user = {"username": login[0]["username"]};

		var random_num = req.app.get('random_num');
		if (random_num > 0.5) {
			res.render('about', user);
		} else {
			res.render('about_alt', user);
		}
	}
};