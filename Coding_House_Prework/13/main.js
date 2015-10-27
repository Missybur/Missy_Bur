$(document).ready(function(){

  function funColor(){

    function invertColor(hexTripletColor) {
        var color = hexTripletColor;
        color = color.substring(1);           // remove #
        color = parseInt(color, 16);          // convert to integer
        color = 0xFFFFFF ^ color;             // invert three bytes
        color = color.toString(16);           // convert to hex
        color = ("000000" + color).slice(-6); // pad with leading zeros
        color = "#" + color;                  // prepend #
        return color;
    }

    $("div").each(function(index, element){
      var colorRand = "#" + Math.floor(Math.random() * 16777215).toString(16);
      var newColor = invertColor(colorRand);
      $(this).css("background-color", colorRand);
      $(this).css("color", newColor);
    });

  }

    $("#button").on ("click", funColor);

});


