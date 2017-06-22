var answers = ["A","B","B","A","A","B","A","B","B"], 
    total = answers.length;
var mistakes = [];

    function getCheckedValue( radioName ){
        var radios = document.getElementsByName( radioName ); // Get radio group by name
        for(var y = 0; y < radios.length; y++)
            if(radios[y].checked) 
                return radios[y].value; // return the checked value
    }

    function getScore(){
        var score = 0;
        for (var i = 0; i < total; i++)
            if (getCheckedValue("question"+i)===answers[i]) 
                score ++; // increment only
            else
                mistakes.push("question" + String(i));
        return score;
    }

    function showScore(){
       document.getElementById("score").innerHTML = getScore();
   }

// Functions for generating code: 1 = plagiarism quiz, 2 = checklist
var codes = ["mead!0178", "geertz@2606", "boas#5842", "malinowski$8442", "benedict%8748", "levistrauss^0809", "leakey&1396", "hurston*9160", "dunham!4295", "morgan@1881", "radcliffe@8155", "kroeber#7660", "goodall$3400", "sapir%8439", "farmer59^00", "tylor&3217", "fossey*3285"];
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