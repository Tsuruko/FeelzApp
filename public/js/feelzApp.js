// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
});

/*
 * Function that is called when the document is ready.
 */

 var wasToggled = false;

function initializePage() {
  var mq = window.matchMedia( "(min-width: 768px)" );
  if (mq.matches) $("#wrapper").addClass("toggled");

	$("#postButtonToggle").click(postButtonToggle);
  $('#postSubmission').click(submitNewPost);

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


}

// pop up selected post's full post
function popupPost(e) {
  e.preventDefault();
  var cat = $(this).data("cat");
  var title = $(this).data("title");
  var info = $(this).data("full");
  var bumpCount = $(this).data("bump");

  var id = $(this).data("monid");
  $('#postFull').data("id", id);

  document.getElementById('fullPostCategory').className = cat;
  document.getElementById('fullPostTitle').innerHTML = title;
  document.getElementById('fullPostInfo').innerHTML = info;
  document.getElementById('fullPostBumpCount').innerHTML = bumpCount;

  if ($("#wrapper").hasClass("toggled")) wasToggled = true;
  $("#wrapper").removeClass("toggled");  

  document.getElementById('popup_container_panel').style.display = "block";
	
}
function hidePopupPost() {
  if (wasToggled) {
    $("#wrapper").addClass("toggled");
    wasToggled = false;
  }
  $('#popup_container_panel').hide();
}

//new post function toggle
function postButtonToggle(e) {
  $('#postButtonToggle').text(function(i, text) {
      if (text === "Cancel") {
          if (wasToggled) {
            $("#wrapper").addClass("toggled");
            wasToggled = false;
          }
          if (! confirm('Are you sure you want to canel this post?') ) {
            //do nothing
            return "Cancel";
          } else {
              document.getElementById('newPostForm').reset();
              $("#popup_container_form").hide();
          }
          
      } else {
          if ($("#wrapper").hasClass("toggled")) wasToggled = true;
          $("#wrapper").removeClass("toggled");
          $('#popup_container_panel').hide();
          $("#popup_container_form").show();
      }
      return text === "Cancel" ? "New Post" : "Cancel";
  });
}
//new post validation
function checkNewPostForm(form) {
  if (form.newPostTitle.value == "") {
    alert("Error: Post Title cannot be blank!");
    form.newPostTitle.focus();
    return false;
  }

  if (form.newPostContent.value == "") {
    alert("Error: Post Content cannot be blank!");
    form.newPostContent.focus();
    return false;
  }

  if (form.newPostCategory.value == "Category") {
    alert("Error: Please select a post category!");
    form.newPostCategory.focus();
    return false;
  }

  return true;
}
//new post submission
function submitNewPost(e) {
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
}

//bumping posts
function bump(e) {
    var bumpCount = Number($('#fullPostBumpCount').val()) + 1;
    var json = { "id": $('#postFull').data("id"),
                 "bumpCount": bumpCount
                };
    $.post('/post/bumpPost', json, function test(result) {
      //console.log(result);
      window.location.href = '/'; // reload the page
    });
}





