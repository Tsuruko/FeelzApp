
/*
  This script will initialize a local Mongo database
  on your machine so you can do development work.

  IMPORTANT: You should make sure the

      local_database_name

  variable matches its value in app.js  Otherwise, you'll have
  initialized the wrong database.
*/

var mongoose = require('mongoose');
var models   = require('./models');
var moment = require('moment');

// Connect to the Mongo database, whether locally or on Heroku
// MAKE SURE TO CHANGE THE NAME FROM 'lab7' TO ... IN OTHER PROJECTS
var local_database_name = 'feelzApp';
var local_database_uri  = 'mongodb://localhost/' + local_database_name
var database_uri = process.env.MONGOLAB_URI || local_database_uri
mongoose.connect(database_uri);


// Do the initialization here

// Step 1: load the JSON data
var postData = require('./postData.json');

// Step 2: Remove all existing documents
models.Post
  .find()
  .remove()
  .exec(onceClear); // callback to continue at

// Step 3: load the data from the JSON file
function onceClear(err) {
  if(err) console.log(err);

  // loop over the projects, construct and save an object from each one
  // Note that we don't care what order these saves are happening in...
  var to_save_count = postData.length;
  for(var i=0; i<postData.length; i++) {

    var newDate = moment(new Date()).utcOffset("-08:00");

    var json = {"postCategory": postData[i]["postCategory"],
                "postTitle": postData[i]["postTitle"],
                "postInfo": postData[i]["postInfo"],
                "fullPost": postData[i]["fullPost"],
                "bumpCount": postData[i]["bumpCount"],
                "dateTime": newDate.toDate(),
                "dateString": newDate.format("ddd, MMM Do YYYY, h:mm:ss a"),
                "dateDay": newDate.format("YYYYMMDD")
            };
                
    var post = new models.Post(json);

    post.save(function(err, post) {
      if(err) console.log(err);

      to_save_count--;
      //console.log(post);
      console.log(to_save_count + ' left to save');
      if(to_save_count <= 0) {
        console.log('DONE');
        // The script won't terminate until the 
        // connection to the database is closed
        mongoose.connection.close()
      }
    });
  }
}

