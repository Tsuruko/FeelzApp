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


$(".version_a").click(function(){
//add your Woopra tracking code for version A's like button click event
woopra.track("a_version_menu_click");
})

$(".version_b").click(function(){
//add your Woopra tracking code for version A's like button click event
woopra.track("b_version_menu_click");
})