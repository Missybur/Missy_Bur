$(document).ready(init);

function init() {
  $('.tower').on('click', moveTo)
  $('.tower').on('click', selectDisk)
}

function moveTo(){
  var opposingChild = $(this).find(">:first-child")
  weight2 = parseInt(opposingChild.text())
  console.log(weight2)
  if(weight2 === NaN){
    $(".clicked").appendTo($(this))
  } else if (weight2 >= weight1){
    $(this).prepend($(".clicked"))
  } else if (weight1 > weight2){
    return
  } else {$(this).prepend($(".clicked"))}


}
var weight1 = ""
var weight2 = ""

function selectDisk() {
  var firstKid = $(this).find(">:first-child")
  weight1 = parseInt(firstKid.text())
  if (firstKid.hasClass('clicked')) {

    firstKid.removeClass('clicked')

  } else {

    $(".clicked").removeClass('clicked')
    firstKid.addClass('clicked')

  }
}


