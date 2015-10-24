$(document).ready(function () {
    "use strict";
    var letterChoices, presidentsArray, guessInput, guess, guessButton, lettersGuessed, lettersMatched, output, man, letters, lives, currentWord, numLettersMatched, messages;

    function setup() {
        /* start config options */
        letterChoices = "abcdefghijklmnopqrstuvwxyz";
        lives = 6;
        presidentsArray = ["lincoln", "kennedy", "washington", "roosevelt", "jefferson", "clinton", "nixon", "wilson", "johnson", "adams"];
        messages = {
            win: 'You win!',
            lose: 'Game over!',
            already_guessed: ' already guessed, please try again...',
            validLetter: 'Please enter a letter from A-Z'
        };

    // function pictureChange(){
    //     if (lives = 4){

    //     }
    // }

        // $("#guess").on("click", function(){
        //     if ($"")
        // })

        // if $("#man") = 4
        /* end config options */

        lettersGuessed = lettersMatched = '';
        numLettersMatched = 0;

        /* choose a word */
        currentWord = presidentsArray[Math.floor(Math.random() * presidentsArray.length)];

        /* make #man and #output blank, create vars for later access */
        output = document.getElementById("output");
        man = document.getElementById("man");
        guessInput = document.getElementById("letter");

        man.innerHTML = 'You have ' + lives + ' lives remaining';
        output.innerHTML = '';

        // function changeImage(){
        //         $("#image-holder").attr('src', "/images/hangman_1.png");
        //     }
        // }


        document.getElementById("letter").value = '';

        /* make sure guess button is enabled */
        guessButton = document.getElementById("guess");
        // guessInput.style.display = 'inline';
        // guessButton.style.display = 'inline';

        /* set up display of letters in current word */
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
            // audio.play("winning.mp3");
        } else {
            output.innerHTML = messages.lose;
            output.classList.add('error');
        }

        // guessInput.style.display = guessButton.style.display = 'none';
        // guessInput.value = '';
    }




    function changeImage6() {

        if (lives === 6) {
        var elem6 = document.createElement("img");
        elem6.setAttribute("src", "images/hangman_6.jpg")
        document.getElementById("image-holder").appendChild(elem6);

            console.log("yes6")
        }
    }

    function changeImage5(){
        if (lives === 5) {
            // var elem5 = document.getElementById("img4")
            // img.src = "hangman_2.jpg"
        var elem5 = document.createElement("img");
        elem5.setAttribute("src", "images/hangman_6.jpg")
        document.getElementById("image-holder").appendChild(elem5);

            console.log("yes5")
        }
    }

     function changeImage4(){
        if (lives === 4) {
            // var elem3 = document.getElementById("img4")
            // img.src = "hangman_2.jpg"
        var elem4 = document.createElement("img");
        elem4.setAttribute("src", "images/hangman_5.jpg")
        document.getElementById("image-holder").appendChild(elem4);

            console.log("yes4")
        }
    }

    function changeImage3(){
        if (lives === 3) {
            // var elem3 = document.getElementById("img4")
            // img.src = "hangman_2.jpg"
        var elem3 = document.createElement("img");
        elem3.setAttribute("src", "images/hangman_4.jpg")
        document.getElementById("image-holder").appendChild(elem3);

            console.log("yes3")
        }
    }

    function changeImage2(){
        if (lives === 2) {
            // var elem3 = document.getElementById("img2")
            // img.src = "hangman_2.jpg"
        var elem2 = document.createElement("img");
        elem2.setAttribute("src", "images/hangman_3.jpg")
        document.getElementById("image-holder").appendChild(elem2);

            console.log("yes2")
        }
    }

    function changeImage1(){
        if (lives === 1) {
            // var elem3 = document.getElementById("img1")
            // img.src = "hangman_2.jpg"
        var elem1 = document.createElement("img");
        elem1.setAttribute("src", "images/hangman_2.jpg")
        document.getElementById("image-holder").appendChild(elem1);

            console.log("yes1")
        }
    }

     function changeImage0(){
        if (lives === 0) {
            // var elem3 = document.getElementById("img1")
            // img.src = "hangman_2.jpg"
        var elem0 = document.createElement("img");
        elem0.setAttribute("src", "images/hangman_1.jpg")
        document.getElementById("image-holder").appendChild(elem0);

            console.log("yes0")
        }
    }

    /* Start game - should ideally check for existing functions attached to window.onload */
    window.onload = setup();

    /* buttons */
    document.getElementById("restart").onclick = setup;

    /* reset letter to guess on click */
    guessInput.onclick = function () {
        this.value = '';
    };

    /* main guess function when user clicks #guess */
    document.getElementById('hangman').onsubmit = function(e) {
        if (e.preventDefault) e.preventDefault();
        output.innerHTML = '';
        output.classList.remove('error', 'warning');
        guess = guessInput.value;

        /* does guess have a value? if yes continue, if no, error */
        if (guess) {
            /* is guess a valid letter? if so carry on, else error */
            if (letterChoices.indexOf(guess) > -1) {
                /* has it been guessed (missed or matched) already? if so, abandon & add notice */
                if ((lettersMatched && lettersMatched.indexOf(guess) > -1) || (lettersGuessed && lettersGuessed.indexOf(guess) > -1)) {
                    output.innerHTML = '"' + guess.toUpperCase() + '"' + messages.already_guessed;
                    output.classList.add("warning");
                //
                }

                /* does guess exist in current word? if so, add to letters already matched, if final letter added, game over with win message */
                else if (currentWord.indexOf(guess) > -1) {
                    var lettersToShow;
                    lettersToShow = document.querySelectorAll(".letter" + guess.toUpperCase());

                    for (var i = 0; i < lettersToShow.length; i++) {
                        lettersToShow[i].classList.add("correct");
                    }

                    /* check to see if letter appears multiple times */
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
                /* guess doesn't exist in current word and hasn't been guessed before, add to lettersGuessed, reduce lives & update user */
                else {
                    lettersGuessed += guess;
                    lives--;
                    man.innerHTML = 'You have ' + lives + ' lives remaining';
                    if (lives === 6) changeImage6();
                    if (lives === 5) changeImage5();
                    if (lives === 4) changeImage4();
                    if (lives === 3) changeImage3();
                    if (lives === 2) changeImage2();
                    if (lives === 1) changeImage1();
                    if (output.innerHTML = messages.lose) changeImage0();
                    // if (lives === 0) changeImage0();
                    if (lives === 0) gameOver();
    // if (lives = 4){
    //     $(#image-holder).attr('src', "hangman_1.png")
    // }

                }
            }
            /* not a valid letter, error */
            else {
                output.classList.add('error');
                output.innerHTML = messages.validLetter;
            }
        }

        // else {

        //             if (lives === 4) {
        //                 $("#image-holder").attr('src',"images/hangman_1.png")
        //                 console.log("yes");
        //             }
        //         }
        /* no letter entered, error */
        else {
            output.classList.add('error');
            output.innerHTML = messages.validLetter;
        }
        return false;
    };

}());