// Get all of our post data
var data = require('../postData.json');

exports.viewCategory = function(req, res){

    cat = req.params.id;

	var newCategory = "";
	if (cat == 1) {
	newCategory = "panel-default";
	} else if (cat == 2) {
	newCategory = "panel-primary";
	} else if (cat == 3) {
	newCategory = "panel-success";
	} else if (cat == 4) {
	newCategory = "panel-custom";
	} else if (cat == 5) {
	newCategory = "panel-warning";
	} else if (cat == 6) {
	newCategory = "panel-danger";
	}

	var posts = data["posts"];
	var findPosts = [];
	for (i = 0; i < posts.length; i++) {
		if ( posts[i]["postCategory"] == newCategory ) {
			findPosts.push(posts[i]);
		}
	}

	var categorized = { "posts":  findPosts } ;

    res.render('index', categorized);

};