'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
 
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript has taken control");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.project-description").hide();

	$("a.thumbnail").click(projectClick);
    $("#submitBtn").click(updateProject); 
    $("a.project-description").click(projectClick);
}

function updateProject(e) {
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });

   var newText = $('#description').val();
   $(projectID + " .project-description").text(newText);
}

function projectClick(e) { 
	//console.log("Project clicked");
    
    // prevent the page from reloading 
    e.preventDefault();
    // In an event handler, $(this) refers to 
    // the object that triggered the event 
    
    //$(this).css("background-color", "#7fff00");

    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    var myImage = $(containingProject).find(".displayImg");

    if (description.is(":visible")) { 
    	description.hide();
    	myImage.show();
    	console.log("description visible");
    } else { 
    	myImage.hide();
    	description.show();
    }
}