//toggle menu
$("#menu-toggle").click(function(e) {
	e.preventDefault();
	$("#wrapper").toggleClass("toggled");
});

//show signup form and hide login
$('#logoutButton').click( function(e) {

  $.get('/Logout', json, function logout() {
     window.location.href = '/'; // reload the page
  });

});

