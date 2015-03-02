
var models = require('../models');

exports.viewHelp = function(req, res){
	models.LoggedIn
	    .find()
	    .exec(checkLogin);

	function checkLogin(err, login) {
		var user = {"username": login[0]["username"]};
		
		var random_num = req.app.get('random_num');
		if (random_num > 0.5) {
			res.render('help', user);
		} else {
			res.render('help_alt', user);
		}
	}
};