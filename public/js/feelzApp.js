// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#postButtonToggle").click(postButtonToggle);

  //temporary
  $("#postSubmission").click(postButtonToggle);

	$(".postSnippet").click(popupPost);

  //$("#feelzNaviBar").load("naviBar.html");
}
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
	document.getElementById('popup_container_panel').style.display = "block";
}

function hidePopupPost(e) {
  document.getElementById('popup_container_panel').style.display = "none";
}

// add the following:

// bump a post script

// update when new post is added
