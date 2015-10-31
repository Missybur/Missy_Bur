'use strict';

$(document).ready(init);

function init() {
  console.log('ready!');
  $('#makeBox').on('click', makeBox);
  $('#randomBox').on('click', randomBox);
  $('.container').on('click', '.box', boxClicked);
  $('.container').click(makeBox);
}

function moveBox(){
  var $this = $(this);

  if (!$('.selected').length || $this.children('.selected').length){

    return;
}

  var $selected = $('.selected').detach();
  $this.append($selected.detach().removeClass('selected'));
}

function boxClicked(event){
  event.stopPropagation();
  var $target = $(event.target);

  var isSelected = $target.hasClass('selected');

  if (isSelected){
    $target.removeClass('selected');
  } else {
    $('.selected').removeClass('selected');
    $target.addClass('selected');
  }
}

  function moveSelected(){

    console.log('moveSelected');
    if ($(this).find(".selected").length > 0){

    }else{detached = $('.selected').detach().removeClass('selected');
        $(this).append(detached)};
  }



function makeBox() {
  var color = $('#color').val();
  var $box = makeColoredBox(color);
  $('#boxes').append($box);
}

function randomBox() {
  var color = $('#color').val();
  var $box = makeColoredBox(color);
  $('#boxes').append($box);
}

function makeColoredBox(color){
  var $box = $('<div>');
  $box.addClass('box');
  $box.css('background-color', color);
  return $box;
}
  // var colorValue = Math.floor(parseInt('ffffff', 16) * Math.random()).toString(16);
  // while(colorValue.length < 6){
  //   colorValue = '0' + colorValue;
  // }
  // var color = '#' + colorValue;
  // var color = "rgb(255,255,255)";

//   var $box = makeColoredBox(randomRGBa());
//   $('#boxes').append($box);
// }

function randomRGB(){
  var r = random255();
  var g = random255();
  var b = random255();
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function randomRGBa(){
  var r = random255();
  var g = random255();
  var b = random255();
  var a = Math.random();
  return 'rgba(' + r + ',' + g + ',' + b + ',' + a +')';
}

function random255(){
  return Math.floor(Math.random() * 256);
}



