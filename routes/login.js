// Get all of our post data
var data = require('../userData.json');
var postData = require('../postData.json');
var models = require('../models');

exports.viewLogin = function(req, res){
	res.render('login');
};


exports.submitLogin = function(req, res){

	//change this to do this on logout
	models.LoggedIn.find().remove().exec();

	var entered_username = req.query.username;
	var entered_password = req.query.password;
	
	var count = 0;

	while( count < data["users"].length ) {
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
	
	var newLogin = new models.LoggedIn ( {
		"username": entered_username,
		"password": entered_password
	});

	newLogin.save(login);

	function login(err, login) {
		if (err) {
			console.log(err);
			res.send(500);
		}
		models.Post
		    .find()
		    .sort('-bumpCount')
		    .exec(renderPosts);

		function renderPosts(err, posts) {
			var loginPosts = {"username": login["username"],
			                "posts": posts
			               };
			res.render('index', loginPosts);
		}
    }
	
};