// Get all of our database models
var models = require('../models');
var moment = require('moment');

exports.viewHome = function(req, res){
  var random_num = 1; //Math.random();  //removing ranomization a/b test
  req.app.set('random_num', random_num); 
  models.LoggedIn
        .find()
        .exec(checkLogin);

  function checkLogin(err, login) {
      if ( login.length != 0) {
          models.Post
                .find()
                .sort({'dateTime': -1})
                .exec(renderPosts);

          function renderPosts(err, posts) {
            var loginPosts = {"username": login[0]["username"],
                              "posts": posts
                             };

            if(random_num > 0.5) {
               res.render('index', loginPosts);
            } else {
               res.render('index_alt', loginPosts);
            }

          }

      } else res.render('login');
  }

};

exports.sortByDateBump = function(req, res) {
  models.Post
        .find()
        .sort({'dateDay': -1, 'bumpCount':-1})
        .exec(renderPosts);

  function renderPosts(err, posts) {
      models.LoggedIn
        .find()
        .exec(checkLogin);

      function checkLogin(err, login) {
        var loginPosts = {"username": login[0]["username"],
                          "posts": posts
                         };
        var random_num = req.app.get('random_num');
        if(random_num > 0.5) {
           res.render('index', loginPosts);
        } else {
           res.render('index_alt', loginPosts);
        }
      }
  }
}

exports.sortByBump = function(req, res) {
  models.Post
        .find()
        .sort('-bumpCount')
        .exec(renderPosts);

  function renderPosts(err, posts) {
      models.LoggedIn
        .find()
        .exec(checkLogin);

      function checkLogin(err, login) {
        var loginPosts = {"username": login[0]["username"],
                          "posts": posts
                         };

        var random_num = req.app.get('random_num');
        if (random_num > 0.5) {
           res.render('index', loginPosts);
        } else {
           res.render('index_alt', loginPosts);
        }
      }
  }
}

exports.viewCategory = function(req, res){
  var cat = req.params.id;
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

  models.Post
        .find({"postCategory": newCategory})
        .sort('-bumpCount')
        .exec(renderCategory);

  function renderCategory(err, posts) {
      models.LoggedIn
        .find()
        .exec(checkLogin);

      function checkLogin(err, login) {
        var loginPosts = {"username": login[0]["username"],
                          "posts": posts
                         };

        var random_num = req.app.get('random_num');
        if (random_num > 0.5) {
           res.render('index', loginPosts);
        } else {
           res.render('index_alt', loginPosts);
        }
      }
  }

};

exports.pushPost = function(req, res){
  var form_data = req.body;
  var newDate = moment(new Date()).utcOffset("-08:00");

  var newPost = new models.Post( {
    "postCategory": form_data.postCategory,
    "postTitle": form_data.postTitle,
    "postInfo": form_data.postInfo,
    "fullPost": form_data.fullPost,
    "bumpCount": form_data.bumpCount,
    "dateTime": newDate.toDate(),
    "dateString": newDate.format("ddd, MMM Do YYYY, h:mm:ss a"),
    "dateDay": newDate.format("YYYYMMDD")

  });

  newPost.save(afterPush);
  function afterPush(err) {
    if (err) {
      console.log(err);
      res.send(500);
    }
    res.send("newpost ok");
  }
};

exports.bumpPost = function(req, res) {
  var data = req.body;

  models.Post
        .update( {"_id": data.id}, { $inc: {"bumpCount": 1 } } )
        .exec(afterBump);

  function afterBump(err, post) {
    if (err) {
      console.log(err);
      res.send(500);
    }
      res.send("ok");
  }

};

exports.deletePost = function(req, res) {
  console.log("deleting post");
  var postID = req.params.id;

  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
  models.Post
        .find({ "_id" : postID })
        .remove()
        .exec(afterRemoving);

  function afterRemoving(err, projects) {
    if (err) {
      console.log(err);
      res.send(500);
    }
    res.send("Ok");
  }

}