"use strict";

$(document).ready(){

  function init(){
    $("#add").click(addToDoItem);
    $('#add').one('click', function(){
      $('table.table').show();
    });
  }

  function addToDoItem(){
    var description = $("#description").val();
    var date = $("#date").val();

    var $tr = $("#sample").clone();

    var toDoItem = $("#new-todo-item").val();
    var date = $("#date").val();

    var $tr = $("<tr>");

    var $checkbox = $("<td>");
    var $input = $("<input>").attr("type", "checkbox");

    $checkbox.append($input);

    var $description = $("<td>").text(description);
    var $date = $("<td>").text(date);

    $tr.append([$checkbox, $description, $date]);

    $("#list").append($tr);

}