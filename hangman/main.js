$(document).ready(function () {
    "use strict";
    var letterChoices, presidentsArray, guessInput, guess, guessButton, lettersGuessed, lettersMatched, output, man, letters, lives, currentWord, numLettersMatched, messages;

    function setup() {
        // start config options */
        letterChoices = "abcdefghijklmnopqrstuvwxyz";
        lives = 6;
        presidentsArray = ["lincoln", "kennedy", "washington", "roosevelt", "jefferson", "clinton", "nixon", "wilson", "johnson", "adams"];
        messages = {
            win: 'You win!',
            lose: 'Game over!',
            already_guessed: ' already guessed, please try again...',
            validLetter: 'Please enter a letter from A-Z'
        };

        lettersGuessed = lettersMatched = '';
        numLettersMatched = 0;

        // choose a word */
        currentWord = presidentsArray[Math.floor(Math.random() * presidentsArray.length)];

        console.log(currentWord);

        // make #man and #output blank, create vars for later access */
        output = document.getElementById("output");
        man = document.getElementById("man");
        guessInput = document.getElementById("letter");

        man.innerHTML = 'You have ' + lives + ' lives remaining';
        output.innerHTML = '';

        document.getElementById("letter").value = '';

        // make sure guess button is enabled */
        guessButton = document.getElementById("guess");

        // set up display of letters in current word */
        letters = document.getElementById("letters");
        letters.innerHTML = '<li class="current-word">Current word:</li>';
        var i = letter;
        var letter;
        for (i = 0; i < currentWord.length; i++) {
            letter = '<li class="letter letter' + currentWord.charAt(i).toUpperCase() + '">' + currentWord.charAt(i).toUpperCase() + '</li>';
            letters.insertAdjacentHTML('beforeend', letter);
        }
    }

    function gameOver(win) {
        if (win) {
            output.innerHTML = messages.win;
            output.classList.add('win');
        } else {
            output.innerHTML = messages.lose;
            output.classList.add('error');
            var images = document.getElementsByTagName('img');
            var l = images.length;
            for (var i = 0; i < l; i++) {
                images[0].parentNode.removeChild(images[0]);
            }
        }

    }

    function changeImage(){

        var img = document.createElement("img");

        if (lives === 6){
            // var elem = document.createElement("img");
            img.src = "images/hangman_6.jpg";
            $("#image-holder").html(img);
            // $("#image-holder").attr("src", "images/hangman_6.jpg");
            console.log("yes6")

        }

        if (lives === 5){
            // var elem = document.createElement("img");
            img.src = "images/hangman_6.jpg";
            $("#image-holder").html(img);
            // $("#image-holder").attr("src", "images/hangman_5.jpg");
            console.log("yes5")

        }

        if (lives === 4){
            img.src = "images/hangman_5.jpg";
            $("#image-holder").html(img);
            // $("#image-holder").attr("src", "images/hangman_4.jpg");
            console.log("yes4")

        }
        if (lives === 3){
            img.src = "images/hangman_4.jpg";
            $("#image-holder").html(img);
            // $("#image-holder").attr("src", "images/hangman_3.jpg");
            console.log("yes3")

        }

         if (lives === 2){
            img.src = "images/hangman_3.jpg";
            $("#image-holder").html(img);
            // $("#image-holder").attr("src", "images/hangman_3.jpg");
            console.log("yes2")

        }

         if (lives === 1){
            img.src = "images/hangman_2.jpg";
            $("#image-holder").html(img);
            // $("#image-holder").attr("src", "images/hangman_3.jpg");
            console.log("yes1")

        }


         if (lives === 0){
            img.src = "images/hangman_1.jpg";
            $("#image-holder").html(img);
            // $("#image-holder").attr("src", "images/hangman_3.jpg");
            console.log("yes0")

        }

    }

     function showAnswer(){
        if (lives === 0){
        man.innerHTML = "The answer was: " + currentWord.toUpperCase();
        category.innerHTML = "GAME OVER!";
        }
    }


    // Start game - should ideally check for existing functions attached to window.onload */
    window.onload = setup();

    // buttons */

    function restart() {
        location= location
    }


    document.getElementById("restart").onclick = restart;
    // console.log(location)

    // reset letter to guess on click */
    guessInput.onclick = function () {
        this.value = '';
    };

    // Enter key acts as 'submit' key

    $("#guess").keypress(function(e){
        if (e.which == 13) {
            e.preventDefault();
            $("form").submit();
        }
    });

    // main guess function when user clicks #guess */
    document.getElementById('hangman').onsubmit = function(e) {
        if (e.preventDefault) e.preventDefault();
        output.innerHTML = '';
        output.classList.remove('error', 'warning');
        guess = guessInput.value;

        // does guess have a value? if yes continue, if no, error */
        if (guess) {
            // is guess a valid letter? if so carry on, else error */
            if (letterChoices.indexOf(guess) > -1) {
                // has it been guessed (missed or matched) already? if so, abandon & add notice */
                if ((lettersMatched && lettersMatched.indexOf(guess) > -1) || (lettersGuessed && lettersGuessed.indexOf(guess) > -1)) {
                    output.innerHTML = '"' + guess.toUpperCase() + '"' + messages.already_guessed;
                    output.classList.add("warning");
                //
                }

                // does guess exist in current word? if so, add to letters already matched, if final letter added, game over with win message */
                else if (currentWord.indexOf(guess) > -1) {
                    var lettersToShow;
                    lettersToShow = document.querySelectorAll(".letter" + guess.toUpperCase());

                    for (var i = 0; i < lettersToShow.length; i++) {
                        lettersToShow[i].classList.add("correct");
                    }

                    // check to see if letter appears multiple times */
                    for (var j = 0; j < currentWord.length; j++) {
                        if (currentWord.charAt(j) === guess) {
                            numLettersMatched += 1;
                        }
                    }

                    lettersMatched += guess;
                    if (numLettersMatched === currentWord.length) {
                        gameOver(true);
                    }
                }
                // guess doesn't exist in current word and hasn't been guessed before, add to lettersGuessed, reduce lives & update user */
                else {
                    lettersGuessed += guess;
                    lives--;
                    man.innerHTML = 'You have ' + lives + ' lives remaining';
                    if (lives === 6) changeImage();
                    if (lives === 5) changeImage();
                    if (lives === 4) changeImage();
                    if (lives === 3) changeImage();
                    if (lives === 2) changeImage();
                    if (lives === 1) changeImage();
                    if (output.innerHTML = messages.lose) showAnswer();
                    if (lives === 0) changeImage();
                    // if (lives === 0) gameOver();
                    }
                }
                // not a valid letter, error */
                else {
                    output.classList.add('error');
                    output.innerHTML = messages.validLetter;
                }
            }

        // no letter entered, error */
        else {
            output.classList.add('error');
            output.innerHTML = messages.validLetter;
        }
        return false;
    };

}());
