// Get all of our post data
var data = require('../postData.json');

exports.pushPost = function(req, res){

  var postTitle = req.query.newPostTitle;
  var postContent = req.query.newPostContent;
  var snippet = postContent;
  
  if (postContent.length > 70) {
    var ellipsis = "...";
    snippet = postContent.substring(0,71).concat(ellipsis);
  }
  var newPost = { "postCategory": "panel-default",
                  "postTitle": postTitle,
                  "postInfo": snippet,
                  "fullPost": postContent
                };

  //add error handling here

  data["posts"].unshift(newPost);

    console.log(data);

    res.render('index', data);

};

/*
// update when new post is added
function submitPost(e) {



  //reset form
  document.newPostForm.reset();
  postButtonToggle();

}*/