
//$("#changePasswordButton").click(togglePassButton);


$("#submitChanges").click(function changePassword(e) {

  /*  ie:
    $.post('/post/bumpPost', json, function test(result) {
      //console.log(result);
      window.location.href = '/'; // reload the page
    });
  */
});

function togglePassButton(e) {

  $(this).text(function(i, text) {
  	  if (text === "Back") {
          $('#changePasswordForm').hide();
      } else {
        console.log("display");
          $('#changePasswordForm').show();
      }
      return text === "Change password" ? "Back" : "Change password";
  });

  //$("#changePassword").hide();

}

  function checkForm(form)
  { /*
    if(form.username.value == "") {
      alert("Error: Username cannot be blank!");
      form.username.focus();
      return false;
    }
    re = /^\w+$/;
    if(!re.test(form.username.value)) {
      alert("Error: Username must contain only letters, numbers and underscores!");
      form.username.focus();
      return false;
    }  */

    var re = /[]/;
    if(form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
      if(form.pwd1.value.length < 6) {
        alert("Error: Password must contain at least six characters!");
        form.pwd1.focus();
        return false;
      }
      if(form.pwd1.value == form.oldPassword.value) {
        alert("Error: New password must be different from old password!!");
        form.pwd1.focus();
        return false;
      }
      re = /[0-9]/;
      if(!re.test(form.pwd1.value)) {
        alert("Error: password must contain at least one number (0-9)!");
        form.pwd1.focus();
        return false;
      }
      re = /[a-z]/;
      if(!re.test(form.pwd1.value)) {
        alert("Error: password must contain at least one lowercase letter (a-z)!");
        form.pwd1.focus();
        return false;
      }
      re = /[A-Z]/;
      if(!re.test(form.pwd1.value)) {
        alert("Error: password must contain at least one uppercase letter (A-Z)!");
        form.pwd1.focus();
        return false;
      }
    } else {
      alert("Error: Please check that you've entered and confirmed your password!");
      form.pwd1.focus();
      return false;
    }

    alert("You entered a valid password: " + form.pwd1.value);
    $("#passwordAlert").hide();
    return true;
  }