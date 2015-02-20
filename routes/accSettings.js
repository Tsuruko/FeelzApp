// Get all of our user data
var data = require('../userData.json');
var models = require('../models');

exports.viewAccSettings = function(req, res) {

	//find logged in as here
	models.LoggedIn.find().exec(userInfo);

	function userInfo(err, info) {
		if (err) {
			console.log(err);
			res.send(500);
		}
		var loginInfo = {"username": info[0]["username"],
						 "email": info[0]["email"],
						 "password": info[0]["password"]
						}

		res.render('accSettings', loginInfo);
	}
	
};

exports.changePass = function(req, res) {
	var old = req.query.oldPassword;
	var newP = req.query.pwd1;
	var confirm = req.query.pwd2;

	//find logged in as here
	models.LoggedIn.update( {} , {"password": newP })
						.exec(afterUpdate);

	function afterUpdate(err, info) {
		if (err) {
			console.log(err);
			res.send(500);
		}

		var loginInfo = { "username": info[0]["username"],
						  "email": info[0]["email"],
						  "password": info[0]["password"]
		}
		res.render('accSettings', loginInfo);
	}
}