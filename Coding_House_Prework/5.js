var swapCase = function(str){
  var newLetters = "";
  for (var i = 0; i < str.length; i++){
    if(str[i] === str[i].toLowerCase()){
      newLetters += str[i].toUpperCase();
    } else {
        newLetters += str[i].toLowerCase();
    }
  }
  return newLetters;
}
