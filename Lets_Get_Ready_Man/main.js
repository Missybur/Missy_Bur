$(document).ready(function(){;

// var emptyLetterValueBoxTwo = $("#small_answer_box_2");

var letterValue;
// var letterValueOne;
// var letterValueTwo;
// var letterValueThree;
// var letterValueFour;
// var letterValueFive;
// var letterValueSix;


var emptyLetterValueBox = [];
var emptyLetterValueBoxOne = [];
var emptyLetterValueBoxTwo = [];
var emptyLetterValueBoxThree = [];
var emptyLetterValueBoxFour = [];
var emptyLetterValueBoxFive = [];
var emptyLetterValueBoxSix = [];


var matchingLetters = "";
// var matchingLettersOne = "";
// var matchingLettersTwo = "";
// var matchingLettersThree = "";
// var matchingLettersFour = "";
// var matchingLettersFive = "";
// var matchingLettersSix = "";


// Box 1: Printing letters to text box

$(".letter").click(function(){
  letterValue = $(this).text();
  console.log(letterValue);
  // console.log(emptyLetterValueBox);
  emptyLetterValueBox.push(letterValue);
  matchingLetters = emptyLetterValueBox.join(" ");
  // debugger;
  console.log(emptyLetterValueBox);
  // console.log(letterValue);
  $("#small_answer_box_1").val(matchingLetters);
  console.log(matchingLetters);
});

// Box 1: Evaluating answer

  $(".click_here_1").on("click", function(){
   if ($("#small_answer_box_1").val().toUpperCase() === $("#todo_checkbox_brush_teeth").text().trim()){
      $("#brush_teeth_image").attr('src',"winning_star_1.png");
    console.log('yes');

  }
  if ($("#small_answer_box_1").val().toUpperCase() != $("#todo_checkbox_brush_teeth").text().trim())
   { $("#brush_teeth_image").attr('src',"try_again.png");
  }

   else {
      console.log("works!");
    }
});

// Box 2: Printing letters to text box

$(".letter").click(function(){
  letterValue = $(this).text();
  // console.log(letterValue);
  console.log(emptyLetterValueBoxTwo);
  emptyLetterValueBoxTwo.push(letterValue);
  matchingLetters= emptyLetterValueBoxTwo.join(" ");
  $("#small_answer_box_2").val(matchingLetters);
});

// Box 2: Evaluating answer


    $(".click_here_2").on("click", function(){
    if ($("#small_answer_box_2").val().toUpperCase() === $("#todo_checkbox_get_dressed").text()){
        $("#get_dressed_image").attr('src',"winning_star_2.png");
      }

      if ($("#small_answer_box_2").val().toUpperCase() != $("#todo_checkbox_get_dressed").text().trim())
     { $("#get_dressed_image").attr('src',"try_again.png");
      }
    });


// Box 3: Printing letters to text box

$(".letter").click(function(){
  letterValueThree = $(this).text();
  // console.log(letterValue);
  // console.log(emptyLetterValueBox);
  emptyLetterValueBoxThree.push(letterValueThree);
  matchingLettersThree = emptyLetterValueBoxThree.join(" ");
  $("#small_answer_box_3").val(matchingLettersThree);
});


// Box 3: Evaluating answer

  $(".click_here_3").on("click", function(){
   if ($("#small_answer_box_3").val().toUpperCase() === $("#todo_checkbox_pick_up_toys").text()){
      $("#clean_up_toys_image").attr('src',"winning_star_3.png");
    }

    if ($("#small_answer_box_3").val().toUpperCase() != $("#todo_checkbox_pick_up_toys").text().trim())
   { $("#clean_up_toys_image").attr('src',"try_again.png");
    }
  });


// Box 4: Printing letters to text box
$(".letter").click(function(){
  letterValueFour = $(this).text();
  // console.log(letterValue);
  // console.log(emptyLetterValueBox);
  emptyLetterValueBoxFour.push(letterValueFour);
  matchingLettersFour = emptyLetterValueBoxFour.join(" ");
  $("#small_answer_box_4").val(matchingLettersFour);
});


// Box 4: Evaluating answer

  $(".click_here_4").on("click", function(){
    if ($("#small_answer_box_4").val().toUpperCase() === $("#todo_checkbox_read").text()){
      $("#read_image").attr('src',"winning_star_4.png");
    }

     if ($("#small_answer_box_4").val().toUpperCase() != $("#todo_checkbox_read").text().trim())
   { $("#read_image").attr('src',"try_again.png");
    }
  });

// Box 5: Printing letters to text box
$(".letter").click(function(){
  letterValueFive = $(this).text();
  // console.log(letterValue);
  // console.log(emptyLetterValueBox);
  emptyLetterValueBoxFive.push(letterValueFive);
  matchingLettersFive = emptyLetterValueBoxFive.join(" ");
  $("#small_answer_box_5").val(matchingLettersFive);
});

// Box 5: Evaluating answer


  $(".click_here_5").on("click", function(){
     if ($("#small_answer_box_5").val().toUpperCase() === $("#todo_checkbox_put_clothes_in_hamper").text()){
      $("#put_clothes_in_hamper_image").attr('src',"winning_star_5.png");
    }

     if ($("#small_answer_box_5").val().toUpperCase() != $("#todo_checkbox_put_clothes_in_hamper").text().trim())
   { $("#put_clothes_in_hamper_image").attr('src',"try_again.png");
    }
  });


// Box 6: Printing letters to text box

$(".letter").click(function(){
  letterValueSix = $(this).text();
  // console.log(letterValue);
  // console.log(emptyLetterValueBox);
  emptyLetterValueBoxSix.push(letterValueSix);
  matchingLettersSix = emptyLetterValueBoxSix.join(" ");
  $("#small_answer_box_6").val(matchingLettersSix);
});


// Box 6: Evaluating answer

    $(".click_here_6").on("click", function(){
      if ($("#small_answer_box_6").val().toUpperCase() === $("#todo_checkbox_say_prayers").text()){
        $("#say_prayers_image").attr('src',"winning_star_6.png");
      }

         if ($("#small_answer_box_6").val().toUpperCase() != $("#todo_checkbox_say_prayers").text().trim())
     { $("#say_prayers_image").attr('src',"try_again.png");
      }
    });

  })







