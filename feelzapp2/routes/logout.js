var models = require('../models');


exports.submitLogout = function(req, res){

	models.LoggedIn.find().remove().exec(removeLogin);

	function removeLogin(err, info) {
		//....
		if (err) {
			console.log(err);
			res.send(500);
		}
		res.send("ok");
	}
}