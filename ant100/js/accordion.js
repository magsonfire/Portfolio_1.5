$(document).ready(function($) {
    $('.accordion').find('.accordion-toggle').click(function(){

    	var section = $(this).siblings('.accordion-section'),
            accordion = $(this).parent(),
            toggles = $(this).siblings('.accordion-toggle'),
            openToggles = $(this).siblings('.accordion-toggle.open');

    	$(this).next().slideToggle('fast');
        $(this).toggleClass('open');

        // Change expand-all to collapse-all if all panels are open
        if (toggles.hasClass('open')) {
            section.addClass('open');
        }

        // Change collapse-all to expand-all if all panels are closed
        else {
            section.removeClass('open');
        }

    });

    $('.accordion-section').click(function(){

    	// Variable to select only the panels associated with this
    	var toggle = $(this).siblings('.accordion-toggle')

        // If all panels are open
        if ($(this).hasClass('open')) {
            // Close all panels
            toggle.next().slideUp('fast');
            // Change all panel toggles to 'closed'
            toggle.removeClass('open');
            // Change this toggle's name to 'Expand All'
            $(this).removeClass('open');
        }
        else { // Otherwise not all panels are open
            // Change to 'Collpase All'
            $(this).addClass('open');
            // Open any closed panels
            toggle.next().slideDown('fast');
            // Change toggle of any closed panels
            toggle.addClass('open');            
        }

    });
});