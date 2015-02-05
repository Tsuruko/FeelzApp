
var postData = require('../postData.json');

exports.view = function(req, res){
	console.log(postData);
	  res.render('index', postData);
};