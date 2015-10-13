$(doument).ready();

$(".spoiler span").hide();

$(".spoiler").append("<button>Reveal Outfit!</button>");

$("button").click(function(){
  $(this).prev().show();
  $(this).remove();
});

$(".Cind_1").append("Cind_2.jpg");

$("Cind_1").click(function(){
  $(this).remove();
});