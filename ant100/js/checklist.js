var total = 9;
var mistakes = [];

    function getCheckbox( checkboxName ){
        var checklist = document.getElementsByName( checkboxName ); // Get checklist boxes by name
        for(var y = 0; y < checklist.length; y++)
            return checklist[y].checked; // return if checked
    }

    function getScore(){
        var score = 0;
        for (var i = 0; i < total; i++)
            if (getCheckbox("question"+i)) // if checked
                score++; // increment score
            else
                mistakes.push("question" + String(i));
        return score;
    }

    function showScore(){
       document.getElementById("score").innerHTML = getScore();
   }

// Functions for generating code: 1 = plagiarism quiz, 2 = checklist
var codes = ["helen45", "athena32", "morgana76", "hephaestus90", "freya21", "osiris81", "odin98", "arachnid54", "bastet45", "gilgamesh33", "daedalus88", "cassandra56", "sekhmet96", "morpheus34", "aristophane76", "hatshepsut95"];
    function getCode(){
        var randomCode = codes[Math.floor(Math.random()*codes.length)];
        return randomCode;
    }

// JQuery to show/hide results & confirmation code
$(document).ready(function($) {
    var results = $(".results"),
        cover = $(".cover"),
        closeResults = $(".close"),
        success = $(".success"),
        code = $("#code"),
        failure = $(".failure"),
        score = $("#score");

    results.hide();
    cover.hide();
    success.hide();
    failure.hide();

    $('#scoreMe').click(function(){
        // If it is a retake, refresh settings
        if (mistakes != []) {
            success.hide();
            failure.hide();

            // Remove mistaks class
            $.each (mistakes, function(i, val) { 
                // For .question0
                $( '.' + val ).removeClass('mistake'); 
            });

            // Reset mistakes array
            mistakes = [];
        }

        // Get score and mistakes array
        getScore();

        // Show results div
        results.show();
        cover.show();

        console.log(code);

        // If score above threshold (perfect score)
        if ((getScore() == total) && (code.text().length == 0)) {
            // Show success message
            success.show();
            // Generate confirmation code
            code.append(getCode());
            console.log(code);
        } 
        // Repeat re-entry of correct quiz
        else if (getScore() == total) {
            // Just show success message
            success.show();
            console.log(code);
        }
        else {
            // Show failure message, including score
            failure.show();
            showScore();

            // Iterate through mistakes array, adding mistake class
            $.each (mistakes, function(i, val) { 
                // For .question0
                $( '.' + val ).addClass('mistake'); 
            });
        }
    });

    // Close results window
    closeResults.click(function() {
        results.hide();
        cover.hide();
    });

    // Close results window when clicking outside
    cover.click(function() {
        results.hide();
        cover.hide();
    });

});