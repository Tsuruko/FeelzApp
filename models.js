
var Mongoose = require('mongoose');


var PostSchema = new Mongoose.Schema({
  	// fields are defined here
	"postCategory": String,
	"postTitle": String,
	"postInfo": String,
	"fullPost": String,
	"bumpCount": Number
});

exports.Post = Mongoose.model('Post', PostSchema);