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
	$(".postSnippet").click(popupPost);
  $("#expandPost").click(popupPost);

  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $('#popup_container_panel').hide();
    if (document.getElementById('popup_container_form').style.display != "block") {
      $("#wrapper").toggleClass("toggled");
    }
  });

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

  $('#postSubmission').click(function(e) {
    console.log('clicked');
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

    console.log(json);
    $.post('/post/new', json, function() {
      window.location.href = '/'; // reload the page
    });
  });

}

//new post function
//make newpost page into a popup form
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

// pop up selected post's full post
function popupPost(e) {
  e.preventDefault();
  var cat = $(this).data("cat");
  var title = $(this).data("title");
  var info = $(this).data("full");
  var bumpCount = $(this).data("bump");

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






