$(document).ready(function(){

// var emptyLetterValueBoxTwo = $("#small_answer_box_2");

var letterValue;

var emptyLetterValueBox = [];

var matchingLetters = "";
 $("#todo_checkbox_get_dressed").hide();
$("#todo_checkbox_pick_up_toys").hide();
$("#todo_checkbox_read").hide();
$("#todo_checkbox_put_clothes_in_hamper").hide();
$("#todo_checkbox_say_prayers").hide();
$(".click_here_2").hide();
$(".click_here_3").hide();
$(".click_here_4").hide();
$(".click_here_5").hide();
$(".click_here_6").hide();
var currTextField = $(".inputTextBrush");


// // Box 1: Evaluating answer


  $(".click_here_1").on("click", function(){
   if ($("#small_answer_box_1").val().toUpperCase() === $("#todo_checkbox_brush_teeth").text().trim()){
      $("#brush_teeth_image").attr('src',"winning_star_1.png");
      //check
      emptyLetterValueBox = [];
      $("#todo_checkbox_get_dressed").show(); //show next
      $(".click_here_1").hide(); // hide prev
      $(".click_here_2").show(); //show next
      currTextField = $(".inputTextShirt"); // get next input box
      //
    console.log('yes');

  }
  else if ($("#small_answer_box_1").val().toUpperCase() != $("#todo_checkbox_brush_teeth").text().trim())
   { $("#brush_teeth_image").attr('src',"try_again.png");
  }
});


// // Box 2: Evaluating answer


  $(".click_here_2").on("click", function(){
  if ($("#small_answer_box_2").val().toUpperCase() === $("#todo_checkbox_get_dressed").text()){
      $("#get_dressed_image").attr('src',"winning_star_2.png");
      emptyLetterValueBox = [];
      $("#todo_checkbox_pick_up_toys").show();
      $(".click_here_2").hide();
      $(".click_here_3").show();
      currTextField = $(".inputTextToys");
    }

    else if ($("#small_answer_box_2").val().toUpperCase() != $("#todo_checkbox_get_dressed").text().trim())
   { $("#get_dressed_image").attr('src',"try_again.png");
    }
  });




// // Box 3: Evaluating answer

  $(".click_here_3").on("click", function(){
   if ($("#small_answer_box_3").val().toUpperCase() === $("#todo_checkbox_pick_up_toys").text()){
      $("#clean_up_toys_image").attr('src',"winning_star_3.png");
      emptyLetterValueBox = [];
      $("#todo_checkbox_read").show();
      $(".click_here_3").hide();
      $(".click_here_4").show();
      currTextField = $(".inputTextRead");
    }

    else if ($("#small_answer_box_3").val().toUpperCase() != $("#todo_checkbox_pick_up_toys").text().trim())
   { $("#clean_up_toys_image").attr('src',"try_again.png");
    }
  });




// // Box 4: Evaluating answer

  $(".click_here_4").on("click", function(){
    if ($("#small_answer_box_4").val().toUpperCase() === $("#todo_checkbox_read").text()){
      $("#read_image").attr('src',"winning_star_4.png");
      emptyLetterValueBox = [];
      $("#todo_checkbox_put_clothes_in_hamper").show();
      $(".click_here_4").hide();
      $(".click_here_5").show();
      currTextField = $(".inputTextHamper");
    }

     if ($("#small_answer_box_4").val().toUpperCase() != $("#todo_checkbox_read").text().trim())
   { $("#read_image").attr('src',"try_again.png");
    }
  });


// // Box 5: Evaluating answer


  $(".click_here_5").on("click", function(){
     if ($("#small_answer_box_5").val().toUpperCase() === $("#todo_checkbox_put_clothes_in_hamper").text()){
      $("#put_clothes_in_hamper_image").attr('src',"winning_star_5.png");
      emptyLetterValueBox = [];
      $("#todo_checkbox_say_prayers").show();
      $(".click_here_5").hide();
      $(".click_here_6").show();
      currTextField = $(".inputTextPray");
    }

     if ($("#small_answer_box_5").val().toUpperCase() != $("#todo_checkbox_put_clothes_in_hamper").text().trim())
   { $("#put_clothes_in_hamper_image").attr('src',"try_again.png");
    }
  });



// // Box 6: Evaluating answer

    $(".click_here_6").on("click", function(){
      if ($("#small_answer_box_6").val().toUpperCase() === $("#todo_checkbox_say_prayers").text()){
        $("#say_prayers_image").attr('src',"winning_star_6.png");
        emptyLetterValueBox = [];
        $("#todo_checkbox_say_prayers").show();
        currTextField = $(".inputTextPray");
      }

         if ($("#small_answer_box_6").val().toUpperCase() != $("#todo_checkbox_say_prayers").text().trim())
     { $("#say_prayers_image").attr('src',"try_again.png");
      }
    });





$("#alphabet").on("click",".letter",function(){
    letterValue = $(this).text();
    emptyLetterValueBox.push(letterValue);
    matchingLetters = emptyLetterValueBox.join("");
    currTextField.val(matchingLetters);
  });

})

