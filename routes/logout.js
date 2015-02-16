var models = require('../models');


exports.submitLogout = function(req, res){

	models.LoggedIn.find().remove().exec(removeLogin);

	function removeLogin(err, info) {
		//....
	}
}