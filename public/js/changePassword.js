confirmNewPassword


// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("test");
	hidePasswordForm();
	$("#changePasswordButton").click(changePass);
}

function hidePasswordForm() {
  document.getElementById('changePasswordForm').style.display = "none";
}

function changePass(e) {

  $(this).text(function(i, text) {
  	  if (text === "Back") {
          document.getElementById('changePasswordForm').style.display = "none";
      } else {
          document.getElementById('changePasswordForm').style.display = "block";
      }
      return text === "Change password" ? "Back" : "Change password";
  });


$("#changePassword").hide();

}