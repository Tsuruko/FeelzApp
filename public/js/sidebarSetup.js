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

	if (mq.matches) $("#wrapper").toggleClass("toggled");
	
	$("#menu-toggle").click(function(e) {
		$("#wrapper").toggleClass("toggled");
	});

}
