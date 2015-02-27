// Get all of our previous user data
var userData = require('../userData.json');
// Get all of our database models
var models = require('../models');

exports.viewSignup = function(req, res) {
	res.render('signup');
};


exports.submitSignup = function(req, res) {
	//change this to do this on logout
	models.LoggedIn.find().remove().exec();

	var form_data = req.query;//req.body;

	var newUser = new models.LoggedIn( {
				"username": form_data.username,
				"email": form_data.email,
				"password": form_data.password
	});

	newUser.save(login);

	console.log(newUser);
	function login(err, login) {
		if (err) {
			console.log(err);
			res.send(500);
		}
		models.Post
		    .find()
		    .sort({'dateTime': -1})
		    .exec(renderPosts);

		function renderPosts(err, posts) {
			var loginPosts = {"username": login["username"],
			                "posts": posts
			               };
			res.render('index', loginPosts);
		}
    }

	/*
	var count = 0;

	while( count < data["users"].length - 1 ) {
		if( entered_username == data["users"][count]["username"])
			break;

		count++;
	}

	if( count == data["users"].length) {
		console.log("error, wrong username/password")
		return;
	}

	if( entered_password != data["users"][count]["password"] ) {
		console.log("error, wrong username/password");
		return;
	}
	*/	

};