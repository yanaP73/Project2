"use strict"
function playAudio() {
    document.getElementById("mp3_src").src = "bckgmusic.mp3";
    
}
function getResults() {
    var amountCorrect = 0;
    for (let i = 1; i <= 3; i++) {
        let radioName = document.getElementsByName('answer' + i);
        for (let j = 0; j < radioName.length; j++) {
            let radiosValue = radioName[j];
                if (radiosValue.checked) {
                if (radiosValue.value == "correct") {
                    amountCorrect++;
                    radiosValue.nextSibling.style.color = "green";
                } else {
                    radiosValue.nextSibling.style.color = "red";
                } 
                } else {
                radiosValue.nextSibling.style.color = "";
                }
            }
        }
        document.getElementById('results').innerHTML = 
        "Correct answers: " + amountCorrect;
    } //https://teamtreehouse.com/community/javascript-project-simple-quiz-with-radio-buttons
    
    