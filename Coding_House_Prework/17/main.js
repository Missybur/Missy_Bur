$(document).ready(function(){

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var possible_answers = ["Lincoln", "Kennedy", "Washington", "Roosevelt", "Jefferson", "Clinton", "Nixon", "Wilson", "Johnson", "Adams"];

    var getRandomAnswer = possible_answers[Math.floor(Math.random() * possible_answers.length)];

  $(".letter").click(function(){
    letterValue = $(this).text();

    emptyLetterContainerSpace.push(letterValue);
    matchingLetters = emptyLetterValueBox.join(" ");
    $(".guess").val(matchingLetters);
    console.log(matchingLetters);
  });

});


// Modification: if wrong guess, display wrong letters
// Modification: if all correct, display congratulations
var numGuesses = 0;
var hangman = [
                ['h','e','l','l','o'],
                ['w','o','r','l','d'],
                ['m','a','t','h'],
                ['b','i','l','l','i','a','r','d','s'],
                ['a','p','o','t','h','e','m'],
                ['r','a','d','i','u','s'],
                ['a','l','i','e','n','s'],
                ['d','o','c','t','o','r'],
                ['i','g','l','o','o'],
                ];
var selection = floor(random(hangman.length));
var drawSpaces = function()
{
    for (var i = 0; i <hangman[selection].length; i++ )
    {
        fill(0, 0, 0);
        line(i*40 + 20, 100, i*40 + 50, 100 );
    }
};

var keyPressed = function ()
{
    var temp = 0;
    if ( numGuesses >= 0 )
    {
      for ( var i = 0; i < hangman[selection].length; i++ )
    {
        if ( key.toString() === hangman[selection] [i] )
        {
            fill(255, 0, 0);
            textSize (20) ;
            text (hangman[selection] [i], i*40 + 30, 95);
            temp++;
            hangman[selection] [i] = '$';
        }
    }
    if ( temp === 0 )    // wrong guess
    {
            numGuesses++;
            fill(255, 0, 255);
            textSize (20);
            text (key, 220+numGuesses*20, 195);
        }
    }
};
var drawPerson = function()
{
    stroke (0, 0, 0);
    noFill();
    line ( 100, 150, 100, 350 );
    line ( 100, 150, 200, 150 );
    line (200, 150, 200, 180 );

    if (numGuesses > 0 )               // head
    {
        ellipse ( 200, 200, 40, 40 );
    }

        if ( numGuesses > 1 )         // torso
        {
            line ( 200, 220, 200, 280 );
        }

        if (numGuesses > 2 )          // left leg
        {
            line ( 200, 280, 170, 320 );
        }

        if ( numGuesses > 3 )       // right leg
        {
            line ( 200, 280, 230, 320 );
        }

        if ( numGuesses > 4 )       // left arm
        {
            line ( 200, 240, 160, 230 );
        }

        if ( numGuesses > 5 )       // right arm
        {
            line ( 200, 240, 240, 230 );
            fill (255, 0, 255);
            textSize (24);
            text ("Game Over !!", 140, 380 );
            numGuesses = -1;
        }
};
var checkWin = function ()
{
    var temp = 0;

    for ( var i = 0; i < hangman [selection].length; i++ )
    {
        if ( hangman [selection] [i] === '$' )
        {
            temp++;
        }
    }

    if ( temp === hangman [selection].length )
    {
        fill (255, 0, 0);
        text ("congratulatons!", 200, 360);
    }
};



var draw = function()
{
    drawSpaces ();
    drawPerson ();
    checkWin ();
};

