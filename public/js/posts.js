// Call this function when the page loads (the "ready" event)

var wasToggled = false;
var mobile = true;

$(document).ready(function() {
  var mq = window.matchMedia( "(min-width: 768px)" );
  if (mq.matches) mobile = false;

  $(".postSnippet").click(popupPost);
  $("#expandPost").click(popupPost);

  $("#bumpButton").click(bump);

  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $('#popup_container_panel').hide();
    if (document.getElementById('popup_container_form').style.display != "block") {
      $("#wrapper").toggleClass("toggled");
    }
  });

//allow close of popups by clicking outside of the popup
  $("#popup_container_panel").click(function(e) {
      if ( $("#popup_container_panel").has(e.target).length === 0 ) {
        hidePopupPost();
      }
  });
  $("#popup_container_form").click(function(e) {
      if ( $("#popup_container_form").has(e.target).length === 0 ) {
        postButtonToggle(null);
      }
  });

});

// pop up selected post's full post
function popupPost(e) {
  e.preventDefault();
  var cat = $(this).data("cat");
  var title = $(this).data("title");
  var info = $(this).data("full");
  var bumpCount = $(this).data("bump");
  var date = $(this).data("date");

  var id = $(this).data("monid");
  $('#postFull').data("id", id);

  document.getElementById('fullPostCategory').className = cat;
  document.getElementById('fullPostTitle').innerHTML = title;
  document.getElementById('fullPostInfo').innerHTML = info;
  document.getElementById('fullPostBumpCount').innerHTML = bumpCount;
  document.getElementById('fullPostDate').innerHTML = date;

  if (mobile) {
    if ($("#wrapper").hasClass("toggled")) wasToggled = true;
    $("#wrapper").removeClass("toggled");  
  } else {
    if (! $("#wrapper").hasClass("toggled")) wasToggled = true;
    $("#wrapper").addClass("toggled");
  }

  document.getElementById('popup_container_panel').style.display = "block";
	
}
function hidePopupPost() {
  if (wasToggled) {
    if (mobile) $("#wrapper").addClass("toggled");
    else $("#wrapper").removeClass("toggled");
    wasToggled = false;
  }
  $('#popup_container_panel').hide();
}

//new post function toggle
$("#postButtonToggle").click(function postButtonToggle(e) {
  $('#postButtonToggle').text(function(i, text) {
    console.log(text);
      if (text === "Cancel") {
          if (! confirm('Are you sure you want to cancel this post?') ) {
            //do nothing
            return "Cancel";
          } else {
              if (wasToggled) {
                if (mobile) $("#wrapper").addClass("toggled");
                else $("#wrapper").removeClass("toggled");
                wasToggled = false;
              }
              document.getElementById('newPostForm').reset();
              $("#popup_container_form").hide();
          }
          
      } else {
        
          if (mobile) {
            if ($("#wrapper").hasClass("toggled")) wasToggled = true;
            $("#wrapper").removeClass("toggled");
          } else {
            if (! $("#wrapper").hasClass("toggled")) wasToggled = true;
            $("#wrapper").addClass("toggled");
          }

          $('#popup_container_panel').hide();
          $("#popup_container_form").show();
      } 
      return text === "Cancel" ? "New Post" : "Cancel";
  });
});

//new post submission and validation
function submitNewPost(form) {
    var postCategory = $('#newPostForm #newPostCategory').val();
    var postTitle = $('#newPostForm #newPostTitle').val();
    var postInfo = "";
    var fullPost = $('#newPostForm #newPostContent').val();
    var bumpCount = "0";

    if (fullPost.length > 70) {
      var ellipsis = "...";
      postInfo = fullPost.substring(0,71).concat(ellipsis);
    } else {
      postInfo = fullPost;
    }

    var json = {
      'postCategory': postCategory,
      'postTitle': postTitle,
      'postInfo':  postInfo,
      'fullPost': fullPost,
      'bumpCount': bumpCount
    };

    $.post('/post/new', json, function() {
      window.location.href = '/'; // reload the page
    });

    return true;
}

//bumping posts
function bump(e) {
    var bumpCount = Number($('#fullPostBumpCount').val()) + 1;
    var json = { "id": $('#postFull').data("id"),
                 "bumpCount": bumpCount
                };
    $.post('/post/bumpPost', json, function (result) {
      //console.log(result);
      window.location.href = '/'; // reload the page
    });
}





