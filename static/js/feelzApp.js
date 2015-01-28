// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#postButtonToggle").click(postButtonToggle);
}
// add the following:

// update main post page with selected post pop up

// bump a post script

// update when new post is added

//make newpost page into a popup form
function postButtonToggle(e) {
  $(this).text(function(i, text) {
  	  if (text === "Back") {
          div_hide();
      } else {
          div_show();
      }
      return text === "Back" ? "New Post" : "Back";
  });
}

//Function To Display Popup
function div_show() {
    document.getElementById('popup_container').style.display = "block";
}
//Function to Hide Popup
function div_hide() {
    document.getElementById('popup_container').style.display = "none";
}
