
function getResults() {
    var amountCorrect = 0;
    for(var i = 0; i <= 3; i++) {
        var radioName = document.getElementsByName('answer' + i);
    for (var j = 0; j < radioName.length; j++) {
        var radiosValue = radioName[j];
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
    var audio, playbtn;
    function initAudioPlayer() {
        audio = new Audio();
        audio.src = "acoustic-folk-music-guitar-141345.mp3";
        audio.loop = true;
        audio.play();
        window.addEventListener("load", initAudioPlayer);
    }
