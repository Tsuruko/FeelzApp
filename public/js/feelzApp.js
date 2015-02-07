// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#postButtonToggle").click(postButtonToggle);
  //$("#postSubmission").click(submitPost);
	$(".postSnippet").click(popupPost);
}

//new post function
//make newpost page into a popup form
function postButtonToggle(e) {
  $('#postButtonToggle').text(function(i, text) {
  	  if (text === "Back") {
          document.getElementById('popup_container_form').style.display = "none";
      } else {
          document.getElementById('popup_container_form').style.display = "block";
      }
      return text === "Back" ? "New Post" : "Back";
  });
}

function hideNewPostForm() {
  document.getElementById('popup_container_form').style.display = "none";
}

// pop up selected post's full post
function popupPost(e) {
  var cat = $(this).data("cat");
  var title = $(this).data("title");
  var info = $(this).data("full");

  document.getElementById('fullPostCategory').className = cat;
  document.getElementById('fullPostTitle').innerHTML = title;
  document.getElementById('fullPostInfo').innerHTML = info;

  document.getElementById('popup_container_panel').style.display = "block";
}

function hidePopupPost(e) {
  document.getElementById('popup_container_panel').style.display = "none";
}

// add the following:

// bump a post script


