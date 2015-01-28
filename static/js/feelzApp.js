'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
 
function initializePage() {
}
// add the following:

// update main post page with selected post pop up

// bump a post script

// update when new post is added

//make newpost page into a popup form
$(function(){
    $('[data-toggle=popover].newPostButton').popover({ 
        html: true, 
        container: 'body',
        content: function() {
          return $('#popover_content_wrapper').html();
        }
        
    });

});

