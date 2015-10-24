$(document).ready(function(){

  var alphabet = ['A', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var word;
  var guess;
  var guesses = [];
  var lives;
  var counter = [];
  var space = [];

  var livesCount = document.getElementById("myLives");

  var buttons = function(){
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++){
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.is = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }


  result = function(){
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++){
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');

      if(word[i] === '_';){
        guess.innerHTML = "_";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

check = function(){
  list.onclick = function(){
    var guess = (this.innerHTML);
    this.setAttribute("class", "active");
    this.onclick = null;
    for (var i = 0; i < word.length; i++){
      if (word[i] === guess){
        guesses[i].innerHTML = guess;
        counter += 1;
        }
      }
    }
  }

  play = function(){

    var answers = ["Lincoln", "Kennedy", "Washington", "Roosevelt", "Jefferson", "Clinton", "Nixon", "Wilson", "Johnson", "Adams"];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategoryMath.floor(Math.random() * categories.length)];
    word = word.replace(/\s/g, "_");
    console.log(word);
    buttons();

    guesses = [];
    lives = 6;
    counter = 0;
    space = 0;
    result();
    comments();
    canvas();
  }
  play();

document.getElementById('reset').onclick = function(){
  correct.parentNode.removeChild(correct);
  letters.parentNode.removeChild(letters);
  play();
}


})

