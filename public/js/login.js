// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  $('#signupButton').click(signup);
  $('#signupButton').click(test);
}

function test(e) {
  console.log(working);
}

//show signup form and hide login
function signup(e) {
  $('#loginbox').hide(); 
  $('#signupbox').show();
}