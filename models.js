
var Mongoose = require('mongoose');


var PostSchema = new Mongoose.Schema({
  	// fields are defined here
	"postCategory": String,
	"postTitle": String,
	"postInfo": String,
	"fullPost": String,
	"bumpCount": Number,
	"date": Date,
	"localDate": String
});

exports.Post = Mongoose.model('Post', PostSchema);

var loginSchema = new Mongoose.Schema({
	"username": String,
	"password": String
});

exports.LoggedIn = Mongoose.model('LoggedIn', loginSchema);