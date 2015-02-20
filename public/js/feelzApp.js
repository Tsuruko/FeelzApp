// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
});

/*
 * Function that is called when the document is ready.
 */

 var wasToggled = false;

function initializePage() {
  $("#menu-toggle").click(function(e) {
  	console.log("clicked");
    $("#sideBarWrapper").toggleClass("toggled");
  });
}

//show signup form and hide login
$('#logoutButton').click( function(e) {

  $.get('/Logout', json, function logout() {
     window.location.href = '/'; // reload the page
  });

});