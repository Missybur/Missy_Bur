$(document).ready(function(){;

var wordList = [
'brush',
'shirt',
'toys',
'read',
'hamper',
'pray'
];
var guesses = [];
var letterValue;
var emptyLetterValueBox = [];
var matchingLetters = "";
var correctAnswer;


$(".letter").click(function(){
  letterValue = $(this).text();
  console.log(letterValue);
  // console.log(emptyLetterValueBox);
  emptyLetterValueBox.push(letterValue);
  matchingLetters = emptyLetterValueBox.join(" ");
  // debugger;
  // console.log(emptyLetterValueBox);
  // console.log(letterValue);
  $("#small_answer_box_1").val(matchingLetters);
  console.log(matchingLetters);
});


$(".letter").click(function(){
  letterValue = $(this).text();
  // console.log(letterValue);
  console.log(emptyLetterValueBox);
  emptyLetterValueBox.push(letterValue);
  matchingLetters = emptyLetterValueBox.join(" ");
  $("#small_answer_box_2").val(matchingLetters);
});

$(".letter").click(function(){
  letterValue = $(this).text();
  // console.log(letterValue);
  // console.log(emptyLetterValueBox);
  emptyLetterValueBox.push(letterValue);
  matchingLetters = emptyLetterValueBox.join(" ");
  $("#small_answer_box_3").val(matchingLetters);
});

$(".letter").click(function(){
  letterValue = $(this).text();
  // console.log(letterValue);
  // console.log(emptyLetterValueBox);
  emptyLetterValueBox.push(letterValue);
  matchingLetters = emptyLetterValueBox.join(" ");
  $("#small_answer_box_4").val(matchingLetters);
});


    $(".click_here_1").on("click", function(){
     if ($("#small_answer_box_1").val().toUpperCase() === $("#todo_checkbox_brush_teeth").text().trim()){
        $("#brush_teeth_image").attr('src',"winning_star_1.png");
      console.log('yes');

    }
    if ($("#small_answer_box_1").val().toUpperCase() != $("#todo_checkbox_brush_teeth").text().trim())
     { $("#brush_teeth_image").attr('src',"try_again.png");
    }
  });

    $(".click_here_2").on("click", function(){
    if ($("#small_answer_box_2").val().toUpperCase() === $("#todo_checkbox_get_dressed").text()){
        $("#get_dressed_image").attr('src',"winning_star_2.png");
      }

      if ($("#small_answer_box_2").val().toUpperCase() != $("#todo_checkbox_get_dressed").text().trim())
     { $("#get_dressed_image").attr('src',"try_again.png");
      }
    });

     if ($("#small_answer_box_3").val().toUpperCase() === $("#todo_checkbox_pick_up_toys").text()){
        $("#clean_up_toys_image").attr('src',"winning_star_3.png");
      }

       if ($("#small_answer_box_3").val().toUpperCase() != $("#todo_checkbox_pick_up_toys").text().trim())
     { $("#clean_up_toys_image").attr('src',"try_again.png");
      }

      if ($("#small_answer_box_4").val().toUpperCase() === $("#todo_checkbox_read").text()){
        $("#read_image").attr('src',"winning_star_4.png");
      }

       if ($("#small_answer_box_4").val().toUpperCase() != $("#todo_checkbox_read").text().trim())
     { $("#read_image").attr('src',"try_again.png");
      }

       if ($("#small_answer_box_5").val().toUpperCase() === $("#todo_checkbox_put_clothes_in_hamper").text()){
        $("#put_clothes_in_hamper_image").attr('src',"winning_star_5.png");
      }

       if ($("#small_answer_box_5").val().toUpperCase() != $("#todo_checkbox_put_clothes_in_hamper").text().trim())
     { $("#put_clothes_in_hamper_image").attr('src',"try_again.png");
      }

      if ($("#small_answer_box_6").val().toUpperCase() === $("#todo_checkbox_say_prayers").text()){
        $("#say_prayers_image").attr('src',"winning_star_6.png");
      }

         if ($("#small_answer_box_6").val().toUpperCase() != $("#todo_checkbox_say_prayers").text().trim())
     { $("#say_prayers_image").attr('src',"try_again.png");
      }

    else {
      console.log("works!");
    }
  })




